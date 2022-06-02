import React from 'react';
import clsx from 'clsx';
import styles from './Button.module.css';

const Button = () => {
  return (
    <button className={clsx(styles.button)} data-testid='custom-button'>
      Click me!
    </button>
  );
};

export default Button;
