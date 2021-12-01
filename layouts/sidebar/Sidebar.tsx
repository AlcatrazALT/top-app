import React from 'react';
import { SidebarProps } from './Sidebar.props';
import styles from './Sidebar.module.css';
import cn from 'classnames';
import { Menu } from '..';
import Logo from '../logo.svg';

const Sidebar = ({className, ...props}: SidebarProps) => {
  return (
    <div
      className={cn(className, styles.sidebar)}
      {...props}
    >
      <Logo className={styles.logo}/>
      <div>Search</div>
      <Menu />
    </div>
  );
};

export default Sidebar;
