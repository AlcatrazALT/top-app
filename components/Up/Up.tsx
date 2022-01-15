import React, { useEffect } from 'react';
import styles from './Up.module.css';
import { useScrollY } from '../../hooks';
import { motion, useAnimation } from 'framer-motion';
import { ButtonIcon } from '..';

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
    <motion.div 
      className={styles.up} 
      initial={{
        opacity: 0
      }}
      animate={controls}
    >
      <ButtonIcon appearance='primary' icon='up' onClick={scrollToTop} />
    </motion.div>
  );
};

export default Up;
