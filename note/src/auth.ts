import NextAuth from 'next-auth';
import Github from 'next-auth/providers/github';    
import { PrismaAdapter } from '@auth/prisma-adapter';
import { db } from '@/db';

const GITHUB_ID = process.env.GITHUB_ID;
const GITHUB_SECRET = process.env.GITHUB_SECRET;

if(!GITHUB_ID || !GITHUB_SECRET) {
    throw new Error('Missing github oauth credentials')
}

export const { handlers: {GET, POST}, auth, signOut, signIn } = NextAuth({
    adapter: PrismaAdapter(db),
    providers: [
        Github({
            clientId: GITHUB_ID,
            clientSecret: GITHUB_SECRET
        })
    ],
    callbacks: {
        async session({ session, user }: any) {
            if(session && user) {
                session.user.id = user.id;
            }

            return session;
        }
    }
})