import React, { useEffect } from 'react';
import { ButtonProps } from './Button.props';
import styles from './Button.module.css';
import cn from 'classnames';
import ArrowIcon from './arrow.svg';
import { motion, useMotionValue } from 'framer-motion';

const Button = ({appearance, arrow = 'none', children, className, ...props}: ButtonProps) => {
  const scale = useMotionValue(1);
  
  useEffect(() => {
    scale.onChange(scale => console.log(scale));
  }, []);

  return (
    <motion.button
      className={cn(
        className,
        styles.button, {
        [styles.primary]: appearance === 'primary',
        [styles.ghost]: appearance === 'ghost'})}
      whileHover={{scale:1.05}}
      style={{scale}}
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
    </motion.button>
  );
};

export default Button;
