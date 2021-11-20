import React from 'react';
import { SidebarProps } from './Sidebar.props';
import styles from './Sidebar.module.css';
import cn from 'classnames';

const Sidebar = ({...props}: SidebarProps) => {
  return (
    <div {...props}>
      <h4>Sidebar</h4>
    </div>
  );
};

export default Sidebar;
