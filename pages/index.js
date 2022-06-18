import HomeContainer from '../container/HomeContainer';
import Head from 'next/head';

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
