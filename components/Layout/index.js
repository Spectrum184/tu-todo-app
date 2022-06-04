import React from 'react';
import styles from './Layout.module.css';
import clsx from 'clsx';
import { useRouter } from 'next/router';

const Layout = ({ children }) => {
  const { pathname } = useRouter();
  console.log(pathname);

  return (
    <main className={clsx(styles.mainLayout)}>
      {children}
      {pathname.includes('login') && <h2>tu ngu si dan</h2>}
    </main>
  );
};

export default Layout;
