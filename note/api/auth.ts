// api/auth.ts
import NextAuth from 'next-auth';
import GitHub from 'next-auth/providers/github';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const { GITHUB_ID, GITHUB_SECRET } = process.env;

if (!GITHUB_ID || !GITHUB_SECRET) {
  throw new Error('Please define GITHUB_ID and GITHUB_SECRET in your environment variables');
}

export default NextAuth({
  providers: [
    GitHub({
      clientId: GITHUB_ID,
      clientSecret: GITHUB_SECRET,
    }),
  ],
  callbacks: {
    async signIn({ profile }) {
      if (!profile || !profile.email) {
        throw new Error('Email not provided by OAuth provider');
      }

      const { email, name } = profile;

      // check if the user already exists in your database
      const existingUser = await prisma.user.findUnique({
        where: { email },
      });

      if (!existingUser) {
        // if user doesn't exist, create a new user in your database
        await prisma.user.create({
          data: {
            email,
            name: name ?? 'Unknown', // ensure name exists or use a default value
          },
        });
      }

      return true; // return true to continue the sign in process
    },
  },
});
