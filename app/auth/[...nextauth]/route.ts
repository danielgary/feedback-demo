import NextAuth from "next-auth";
import EmailProvider from "next-auth/providers/email";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const handler = NextAuth({
  adapter: PrismaAdapter(prisma) as any,
  providers: [
    EmailProvider({
      server: process.env.MAIL_SERVER,
      from: "NextAuth.js <no-reply@example.com>",
    }),
  ],
});

export { handler as GET, handler as POST };
