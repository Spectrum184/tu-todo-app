import NextAuth from 'next-auth';
import { firebase } from '~/utils';
import { FirebaseAdapter } from '@next-auth/firebase-adapter';

export default NextAuth({
  adapter: FirebaseAdapter(firebase.storage),
});
