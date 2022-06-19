import styles from './Layout.module.css';
import React from 'react';
import clsx from 'clsx';
import { useSession } from 'next-auth/react';

const Layout = ({ showHeader = true, children }) => {
  const { data } = useSession();

  console.log(data);

  return (
    <main className={clsx(styles.mainLayout, 'dark')}>
      {showHeader && <h2>tu ngu si dan</h2>}
      {children}
    </main>
  );
};

export default Layout;
