import React, { useContext } from 'react';
import { AppContext } from '../../contexts/app.context';
import { FirstLevelMenuItem, PageItem, TopLevelCategory } from '../../types';
import styles from './Menu.module.css';
import CoursesIcon from './icons/courses.svg';
import ServicesIcon from './icons/services.svg';
import BooksIcon from './icons/books.svg';
import ProductsIcon from './icons/products.svg';
import cn from 'classnames';

const firstLevelMenu: FirstLevelMenuItem[ ] = [
  {route:'courses', name:'Courses', icon: <CoursesIcon />, id: TopLevelCategory.Courses},
  {route:'services', name:'Services', icon: <ServicesIcon />, id: TopLevelCategory.Services},
  {route:'books', name:'Books', icon: <BooksIcon />, id: TopLevelCategory.Books},
  {route:'products', name:'Products', icon: <ProductsIcon />, id: TopLevelCategory.Products}
];

const Menu = () => {
  const {menu,firstCategory,setMenu} = useContext(AppContext);

  const buildFirstLevel = () => {
    return (
      <>
        {firstLevelMenu.map(menu => (
          <div key={menu.route}>
            <a href={`/${menu.route}`}>
              <div className={cn(styles.firstLevel,{
                [styles.firstLevelActive]: menu.id === firstCategory
              })}>
                {menu.icon}
                <span>{menu.name}</span>
              </div>
            </a>
            {menu.id === firstCategory && buildSecondLevel(menu)}
          </div>
        ))}
      </>
    );
  };

  const buildSecondLevel = (menuItem: FirstLevelMenuItem) => {
    return (
      <div className={styles.secondBlock}>
        {menu.map(m => (
          <div key={m._id.secondCategory}>
            <div className={styles.secondLevel}>
              {m._id.secondCategory}
              <div className={cn(styles.secondLevelBlock, {
                [styles.secondLevelBlockOpened]: m.isOpened
              })}>
                {buildThirdLevel(menuItem.route, m.pages)}
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  };

  const buildThirdLevel = (route: string, pages: PageItem[]) => {
    return (
      pages.map(page => (
        <a
          href={`/${route}/${page.alias}`}
          className={cn(styles.thirdLevel,{[styles.thirdLevelActive] : false})}
        >
          {page.category}
        </a>
      ))
    );
  };
  
  return (
    <div className={styles.menu}>
      {buildFirstLevel()}
    </div>
  );
};

export default Menu;
