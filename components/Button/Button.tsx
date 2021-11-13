import React from 'react';
import { ButtonProps } from './Button.props';
import styles from './Button.module.css';
import cn from 'classnames';
import ArrowIcon from './arrow.svg';

const Button = ({appearance, arrow = 'none', children, className, ...props}: ButtonProps) => {
  return (
    <button
      className={cn(
        className,
        styles.button, {
        [styles.primary]: appearance === 'primary',
        [styles.ghost]: appearance === 'ghost'})}
      {...props}
      >
      {children}
      {arrow !== 'none' &&
        <span
          className={cn(
            styles.arrow,
            {[styles.down]: arrow === 'down'})}
        >
          <ArrowIcon />
        </span>}
    </button>
  );
};

export default Button;
