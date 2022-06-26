import Head from 'next/head';
import RegisterContainer from '~/container/RegisterContainer';

export default function Login() {
  return (
    <div>
      <Head>
        <title>Register</title>
        <meta name='description' content='Todo app by tu dep zai' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <RegisterContainer />
    </div>
  );
}
