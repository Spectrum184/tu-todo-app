import Head from 'next/head';
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
