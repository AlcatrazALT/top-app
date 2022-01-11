import React, { ForwardedRef, forwardRef } from 'react';
import styles from './Input.module.css';
import cn from 'classnames';
import { InputProps } from './Input.props';

const Input = forwardRef(({className, ...props}: InputProps, ref: ForwardedRef<HTMLInputElement>): JSX.Element => {
  return (
    <input
      className={cn(className, styles.input)}
      {...props}
      ref={ref}
    />
  );
});

export default Input;
