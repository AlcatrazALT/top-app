import React, { useEffect } from 'react';
import cn from 'classnames';
import styles from './Up.module.css';
import UpIcon from './up.svg';
import { useScrollY } from '../../hooks';
import { motion, useAnimation } from 'framer-motion';

const Up = (): JSX.Element => {
  const controls = useAnimation();
  const y = useScrollY();

  useEffect(() => {
    controls.start({
      opacity: y/document.body.scrollHeight
    });

  }, [y, controls]);

  const scrollToTop = (): void => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  return (
    <motion.button 
      className={styles.up} 
      onClick={scrollToTop}
      initial={{
        opacity: 0
      }}
      animate={controls}
    >
      <UpIcon />
    </motion.button>
  );
};

export default Up;
