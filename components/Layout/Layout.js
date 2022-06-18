import styles from './Layout.module.css';
import React from 'react';
import clsx from 'clsx';
import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';

const Layout = ({ children }) => {
  const { pathname } = useRouter();
  const { data } = useSession();

  console.log(data);

  return (
    <main className={clsx(styles.mainLayout)}>
      {children}
      {pathname.includes('login') && <h2>tu ngu si dan</h2>}
    </main>
  );
};

export default Layout;
