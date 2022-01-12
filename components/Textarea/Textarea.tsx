import React, { ForwardedRef, forwardRef } from 'react';
import styles from './Textarea.module.css';
import cn from 'classnames';
import { TextareaProps } from './Textarea.props';

const Textarea = forwardRef(({error, className, ...props}: TextareaProps, ref: ForwardedRef<HTMLTextAreaElement>): JSX.Element => {
  return (
    <div className={cn(styles.wrapper, className)}>
      <textarea
        className={cn(styles.textarea, {
          [styles.error]: error
        })}
        {...props}
        ref={ref}
      />
      {error && <span className={styles.errorMessage}>{error.message}</span>}
    </div>
  );
});

export default Textarea;
