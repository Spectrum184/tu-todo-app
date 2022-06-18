import HomeContainer from '../container/HomeContainer';
import Head from 'next/head';
import { getSession } from 'next-auth/react';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Todo App</title>
        <meta name='description' content='Todo app by tu dep zai' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <HomeContainer />
    </div>
  );
}

export async function getServerSideProps({ req }) {
  const session = await getSession({ req });

  if (!session) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    };
  }

  return { props: {} };
}
