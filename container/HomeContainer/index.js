import React from 'react';
import Layout from '../../components/Layout';
import styles from './Home.module.css';
import clsx from 'clsx';

const HomeContainer = () => {
  return (
    <Layout>
      <h1 className={clsx(styles.homeTitle)}>Hello May Cung</h1>
    </Layout>
  );
};

export default HomeContainer;
