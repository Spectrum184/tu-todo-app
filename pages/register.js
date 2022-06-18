import Head from 'next/head';
import Link from 'next/link';
import LoginContainer from '~/container/LoginContainer';

export default function Register() {
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
