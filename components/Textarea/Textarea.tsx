import React, { ForwardedRef, forwardRef } from 'react';
import styles from './Textarea.module.css';
import cn from 'classnames';
import { TextareaProps } from './Textarea.props';

const Textarea = forwardRef(({className, ...props}: TextareaProps, ref: ForwardedRef<HTMLTextAreaElement>): JSX.Element => {
  return (
    <textarea
      className={cn(className, styles.textarea)}
      {...props}
      ref={ref}
    />
  );
});

export default Textarea;
