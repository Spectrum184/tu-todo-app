import styles from './Button.module.css';
import React from 'react';
import clsx from 'clsx';

import { toast } from 'react-toastify';

const Button = () => {
  const onClick = () => {
    toast.success('ok');
  };

  return (
    <button
      onClick={onClick}
      className={clsx(styles.button)}
      data-testid='custom-button'
    >
      Click me!
    </button>
  );
};

export default Button;
