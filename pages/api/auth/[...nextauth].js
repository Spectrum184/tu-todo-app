import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import dbConnect from '~/server/utils/database';

import { authController } from '~/server/controllers';
import { config } from '~/lib';

dbConnect();

export default NextAuth({
  session: {
    strategy: 'jwt',
  },
  jwt: {
    secret: config.ACCESS_SECRET_TOKEN,
    maxAge: 60 * 60 * 24 * 30,
  },
  providers: [
    CredentialsProvider({
      name: 'credentials',
      async authorize(credentials, req) {
        await authController.authorize(credentials, req);
      },
    }),
  ],
  secret: config.NEXT_AUTH_SECRET,
  pages: {
    signIn: '/login',
    error: '/login',
  },
});
