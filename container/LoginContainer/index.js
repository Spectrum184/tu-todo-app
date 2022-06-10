import React from 'react';
import Layout from '~/components/Layout';
import { useSession } from 'next-auth/react';

const LoginContainer = () => {
  const { data } = useSession();
  console.log(data);

  return <Layout>LoginContainer</Layout>;
};

export default LoginContainer;
