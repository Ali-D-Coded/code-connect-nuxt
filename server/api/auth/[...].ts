import { NuxtAuthHandler } from "#auth";
import { PrismaClient } from "@prisma/client";
import CredentialsProvider from "next-auth/providers/credentials";
import * as argon from "argon2"
const prisma = new PrismaClient()
export default NuxtAuthHandler({
  secret: useRuntimeConfig().authSecret,

  pages: {
    signIn: "/login",
  },

  providers: [
    // @ts-expect-error
    CredentialsProvider.default({
      name: "credentials",
      credentials: {},
      async authorize(credentials: { username: string; password: string }) {
        // TODO: Fetch user from database

		  const user = await prisma.user.findUnique({
			where:{ userName: credentials.username }
      });
        console.log({user});
        

        if (!user) {
          throw createError({
            statusCode: 401,
            statusMessage: "Unauthorized",
          });
        }

        const isValid = await argon.verify(
          credentials.password,
          user.password
        );

        if (!isValid) {
          throw createError({
            statusCode: 401,
            statusMessage: "Unauthorized",
          });
        }

        return {
          ...user,
          password: undefined,
        };
      },
    }),
  ],

  session: {
    strategy: "jwt",
  },

  callbacks: {
    async jwt({ token, user, account }) {
      if (user) {
        token = {
          ...token,
          ...user,
        };
      }

      return token;
    },

    async session({ session, token }) {
      session.user = {
        ...token,
        ...session.user,
      };

      return session;
    },
  },
});