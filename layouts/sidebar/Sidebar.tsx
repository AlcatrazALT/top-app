import React from 'react';
import { SidebarProps } from './Sidebar.props';
import styles from './Sidebar.module.css';
import cn from 'classnames';
import { Menu } from '..';

const Sidebar = ({...props}: SidebarProps) => {
  return (
    <div {...props}>
      <Menu />
    </div>
  );
};

export default Sidebar;
