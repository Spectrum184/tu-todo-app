import Head from 'next/head';
import Link from 'next/link';
import { getSession } from 'next-auth/react';
import LoginContainer from '~/container/LoginContainer';

export default function Login() {
  return (
    <div>
      <Head>
        <title>Login</title>
        <meta name='description' content='Todo app by tu dep zai' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <h1 className=' bg-red-500'>tu dep trai</h1>
      <Link href='/'>
        <a>Home</a>
      </Link>
      <LoginContainer />
    </div>
  );
}

export async function getServerSideProps({ req }) {
  const session = await getSession({ req });

  if (session) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  return { props: {} };
}
