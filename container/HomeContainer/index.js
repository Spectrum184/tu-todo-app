import React, { useState } from 'react';
import Layout from '~/components/Layout';
import styles from './Home.module.css';
import clsx from 'clsx';
import Button from '~/components/Button';

const HomeContainer = () => {
  const [isActive, setIsActive] = useState(false);

  const onClick = () => {
    setIsActive(!isActive);
  };

  return (
    <Layout>
      <h1
        className={clsx(styles.homeTitle, {
          underline: isActive,
        })}
        data-testid='homepage-title'
      >
        Hello May Cung
      </h1>
      <Button />
      <button onClick={onClick}>Click</button>
    </Layout>
  );
};

export default HomeContainer;
