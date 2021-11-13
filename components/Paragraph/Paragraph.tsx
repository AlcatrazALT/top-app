import React from 'react';
import { ParagraphProps } from './Paragraph.props';
import styles from './Paragraph.module.css';
import cn from 'classnames';

const Paragraph = ({children, size = 'm', className, ...props}: ParagraphProps) => {
  return (
    <p
      className={cn(
        styles.paragraph,
        {
          [styles.s]: size === 's',
          [styles.m]: size === 'm',
          [styles.l]: size === 'l',
        })
      }
      {...props}
    >
      {children}
    </p>
  );
};

export default Paragraph;
