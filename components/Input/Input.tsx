import React, { ForwardedRef, forwardRef } from 'react';
import styles from './Input.module.css';
import cn from 'classnames';
import { InputProps } from './Input.props';

const Input = forwardRef(({error, className, ...props}: InputProps, ref: ForwardedRef<HTMLInputElement>): JSX.Element => {
  return (
    <div className={cn(styles.wrapper, className)}>
      <input
        className={cn(styles.input, {
          [styles.error]: error
        })}
        {...props}
        ref={ref}
      />
      {error && <span className={styles.errorMessage} role="alert">{error.message}</span>}
    </div>
  );
});

export default Input;
