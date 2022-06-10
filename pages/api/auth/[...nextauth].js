import NextAuth from 'next-auth';
import { config, errorMessage } from '~/lib';
import CredentialsProvider from 'next-auth/providers/credentials';
import dbConnect from '~/server/utils/database';
import { userService } from '~/server/services';
const httpErrors = require('http-errors');

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
        try {
          const { username, password } = req.body;

          const user = userService.login({ username, password });

          if (!user) return httpErrors(401, errorMessage.NO_USER);

          return user;
        } catch (error) {
          return httpErrors(401, errorMessage.NO_USER);
        }
      },
    }),
  ],
  secret: config.NEXT_AUTH_SECRET,
  pages: {
    signIn: '/login',
    error: '/login',
  },
});
