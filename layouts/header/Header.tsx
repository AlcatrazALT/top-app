import React from 'react';
import { HeaderProps } from './Header.props';
import styles from './Header.module.css';
import cn from 'classnames';

const Header = ({...props}: HeaderProps) => {
  return (
    <div>
      <h4>Header</h4>
    </div>
  );
};

export default Header;
