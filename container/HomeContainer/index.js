import React from 'react';
import Layout from '~/components/Layout';
import styles from './Home.module.css';
import clsx from 'clsx';
import Button from '~/components/Button';

const HomeContainer = () => {
  return (
    <Layout>
      <h1 className={clsx(styles.homeTitle)} data-testid='homepage-title'>
        Hello May Cung
      </h1>
      <Button />
    </Layout>
  );
};

export default HomeContainer;
