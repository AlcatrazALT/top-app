import React, { useEffect, useState } from 'react';
import { HeaderProps } from './Header.props';
import styles from './Header.module.css';
import cn from 'classnames';
import Logo from '../logo.svg';
import { ButtonIcon } from '../../components';
import { motion } from 'framer-motion';
import { Sidebar } from '..';
import { useRouter } from 'next/router';

const Header = ({className, ...props}: HeaderProps): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setIsOpen(false);
  }, [router]);

  const variants = {
    open: {
      opacity: 1,
      x: 0,
      transition: {
        stiffness: 20
      }
    },
    close: {
      opacity: 0,
      x: '100%',
    }
  };

  return (
    <header
      className={cn(styles.header, className)} 
      {...props}
    >
      <Logo />
      <ButtonIcon appearance='white' icon='menu' onClick={() => setIsOpen(true)} />
      <motion.div 
        className={styles.mobileMenu}
        variants={variants}
        initial={'close'}
        animate={isOpen ? 'open' : 'close'}
      >
        <Sidebar />
        <ButtonIcon className={styles.menuClose} appearance='white' icon='close' onClick={() => setIsOpen(false)} />
      </motion.div>
    </header>
  );
};

export default Header;
