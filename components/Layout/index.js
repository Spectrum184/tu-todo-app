import React from 'react';
import styles from './Layout.module.css';
import clsx from 'clsx';

const Layout = ({ children }) => {
  return <main className={clsx(styles.mainLayout)}>{children}</main>;
};

export default Layout;
