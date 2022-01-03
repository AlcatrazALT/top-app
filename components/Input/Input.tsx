import React from 'react';
import styles from './Input.module.css';
import cn from 'classnames';
import { InputProps } from './Input.props';

const Input = ({className, ...props}: InputProps): JSX.Element => {
  return (
    <input
      className={cn(className, styles.input)}
      {...props}
    />
  );
};

export default Input;
