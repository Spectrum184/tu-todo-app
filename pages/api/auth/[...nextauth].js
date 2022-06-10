import NextAuth from 'next-auth';
import { config } from '~/lib';
import CredentialsProvider from 'next-auth/providers/credentials';
import dbConnect from '~/server/utils/database';

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
        console.log(credentials, req);

        return null;
      },
    }),
  ],
  secret: config.NEXT_AUTH_SECRET,
  pages: {
    signIn: '/login',
    error: '/login',
  },
});
