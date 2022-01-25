import React, { useContext, KeyboardEvent } from 'react';
import { AppContext } from '../../contexts/app.context';
import { FirstLevelMenuItem, PageItem } from '../../types';
import styles from './Menu.module.css';
import cn from 'classnames';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { firstLevelMenu } from '../../helpers';
import { motion } from 'framer-motion';

const Menu = (): JSX.Element => {
  const {menu,firstCategory,setMenu} = useContext(AppContext);
  const router = useRouter();
  
  const variants = {
    visible: {
      marginBottom: 20,
      transition: {
        when: 'beforeChildren',
        staggerChildren: 0.1
      }
    },
    hidden: {
      marginBottom: 0
    }
  };

  const variantsChildren = {
    visible: {
      opacity: 1,
      height: 28,
    },
    hidden: {
      opacity: 0,
      height: 0,
    }
  };

  const openSecondLevel = (secondCategory: string): void => {
    setMenu && setMenu(menu.map(m => {
      if (m._id.secondCategory === secondCategory) {
        m.isOpened = !m.isOpened;
      }
      return m;
    }));
  };

  const openSecondLevelKey = (key: KeyboardEvent, secondCategory: string): void => {
    if (key.code == 'Space' || key.code == 'Enter') {
      key.preventDefault();
      openSecondLevel(secondCategory);
    }
  };
  
  const buildFirstLevel = (): JSX.Element => {
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

  const buildSecondLevel = (menuItem: FirstLevelMenuItem): JSX.Element => {
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
                onKeyDown={(key: KeyboardEvent) => openSecondLevelKey(key, m._id.secondCategory)}
                tabIndex={0}
              >
                {m._id.secondCategory}
              </div>
              <motion.div
                layout
                variants={variants}
                initial={m.isOpened ? 'visible' : 'hidden'}
                animate={m.isOpened ? 'visible' : 'hidden'}
                className={cn(styles.secondLevelBlock)}
              >
                {buildThirdLevel(menuItem.route, m.pages, m.isOpened ?? false)}
              </motion.div>
            </div>);
        })}
      </div>
    );
  };

  const buildThirdLevel = (route: string, pages: PageItem[], isOpen: boolean): JSX.Element[] => {
    return (
      pages.map(page => (
        <motion.div
          key={page._id}
          variants={variantsChildren}
        >
          <Link href={`/${route}/${page.alias}`}>
            <a
              className={cn(styles.thirdLevel,
                {[styles.thirdLevelActive] : `/${route}/${page.alias}` === router.asPath})
              }
              tabIndex={isOpen ? 0 : -1}
            >
              {page.category}
            </a>
          </Link>
        </motion.div>
      ))
    );
  };
  
  return (
    <nav
      className={styles.menu} 
      role="navigation"
    >
      {buildFirstLevel()}
    </nav>
  );
};

export default Menu;
