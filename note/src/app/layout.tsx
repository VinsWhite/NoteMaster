import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBarComp from "@/components/navbar-comp";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Note Manager",
  description: "Note Manager is a useful app for managing note",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBarComp />
        <div className="px-4">{children}</div>
      </body>
    </html>
  );
}
