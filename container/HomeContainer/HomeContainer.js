import styles from './Home.module.css';
import React, { useState } from 'react';
import clsx from 'clsx';
import Layout from '~/components/Layout';
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
      <button className='dark:text-4xl' onClick={onClick}>
        Click
      </button>
    </Layout>
  );
};

export default HomeContainer;
