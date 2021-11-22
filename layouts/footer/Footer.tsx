import React from 'react';
import { FooterProps } from './Footer.props';
import styles from './Footer.module.css';
import cn from 'classnames';
import {format} from 'date-fns';

const Footer = ({className, ...props}: FooterProps) => {
  return (
    <footer
      className={cn(
        className,
        styles.footer,
        )}
      {...props}
      >
      <div>
        2020 - {format(new Date(), 'yyyy')} All rights reserved
      </div>
      <a href="#" target="_black">User agreement</a>
      <a href="#" target="_black">Privacy policy</a>
    </footer>
  );
};

export default Footer;
