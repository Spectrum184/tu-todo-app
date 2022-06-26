import styles from './Layout.module.css';
import React from 'react';
import clsx from 'clsx';

const Layout = ({ showHeader = true, children }) => {
  return (
    <main className={clsx(styles.mainLayout, 'dark')}>
      {showHeader && <h2>tu ngu si dan</h2>}
      {children}
    </main>
  );
};

export default Layout;
