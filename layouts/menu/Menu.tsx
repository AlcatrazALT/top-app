import React, { useContext } from 'react';
import { AppContext } from '../../contexts/app.context';
import styles from './Menu.module.css';

const Menu = () => {
  const {menu,firstCategory,setMenu} = useContext(AppContext);
  return (
    <div>
      <ul>
        {menu.map((m, i) => (<li key={i}>{m._id.secondCategory}</li>))}
      </ul>
    </div>
  );
};

export default Menu;
