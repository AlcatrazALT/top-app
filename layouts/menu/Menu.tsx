import React, { useContext } from 'react';
import { AppContext } from '../../contexts/app.context';
import { FirstLevelMenuItem, PageItem } from '../../types';
import styles from './Menu.module.css';
import cn from 'classnames';
import Link from 'next/link';
import { useRouter } from 'next/dist/client/router';
import { firstLevelMenu } from '../../helpers';

const Menu = () => {
  const {menu,firstCategory,setMenu} = useContext(AppContext);
  const router = useRouter();

  const openSecondLevel = (secondCategory: string) => {
    setMenu && setMenu(menu.map(m => {
      if (m._id.secondCategory === secondCategory) {
        m.isOpened = !m.isOpened;
      }
      return m;
    }));
  };
  
  const buildFirstLevel = () => {
    return (
      <>
        {firstLevelMenu.map(menu => (
          <div key={menu.route}>
            <Link href={`/${menu.route}`}>
              <a>
                <div className={cn(styles.firstLevel,{
                  [styles.firstLevelActive]: menu.id === firstCategory
                })}>
                  {menu.icon}
                  <span>{menu.name}</span>
                </div>
              </a>
            </Link>
            {menu.id === firstCategory && buildSecondLevel(menu)}
          </div>
        ))}
      </>
    );
  };

  const buildSecondLevel = (menuItem: FirstLevelMenuItem) => {
    return (
      <div className={styles.secondBlock}>
        {menu.map(m => {
          if (m.pages.map(p => p.alias).includes(router.asPath.split('/')[2])) {
            m.isOpened = !m.isOpened;
          }
          return (
            <div key={m._id.secondCategory}>
            <div
              className={styles.secondLevel}
              onClick={() => openSecondLevel(m._id.secondCategory)}
            >
              {m._id.secondCategory}
              <div className={cn(styles.secondLevelBlock, {
                [styles.secondLevelBlockOpened]: m.isOpened
              })}>
                {buildThirdLevel(menuItem.route, m.pages)}
              </div>
            </div>
          </div>);
        })}
      </div>
    );
  };

  const buildThirdLevel = (route: string, pages: PageItem[]) => {
    return (
      pages.map(page => (
        <Link href={`/${route}/${page.alias}`}>
          <a
            className={cn(styles.thirdLevel,
              {[styles.thirdLevelActive] : `/${route}/${page.alias}` === router.asPath})}
          >
            {page.category}
          </a>
        </Link>
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
