import React, { useContext, KeyboardEvent, useState } from 'react';
import { AppContext } from '../../contexts/app.context';
import { FirstLevelMenuItem, PageItem } from '../../types';
import styles from './Menu.module.css';
import cn from 'classnames';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { firstLevelMenu } from '../../helpers';
import { motion, useReducedMotion } from 'framer-motion';

const Menu = (): JSX.Element => {
  const {menu,firstCategory,setMenu} = useContext(AppContext);
  const [announce, setAnnounce] = useState<'closed' | 'opened' | undefined>();
  const router = useRouter();
  const shouldReduceMotion = useReducedMotion();

  const variants = {
    visible: {
      marginBottom: 20,
      transition: shouldReduceMotion ? {} : {
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
      opacity: shouldReduceMotion ? 1 : 0,
      height: 0,
    }
  };

  const openSecondLevel = (secondCategory: string): void => {
    setMenu && setMenu(menu.map(m => {
      if (m._id.secondCategory === secondCategory) {
        setAnnounce(m.isOpened ? 'closed' : 'opened');
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
      <ul className={styles.firstLevelList}>
        {firstLevelMenu.map(menu => (
          <li
            key={menu.route}
            aria-expanded={menu.id === firstCategory}
          >
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
          </li>
        ))}
      </ul>
    );
  };

  const buildSecondLevel = (menuItem: FirstLevelMenuItem): JSX.Element => {
    return (
      <ul className={styles.secondBlock}>
        {menu.map(m => {
          if (m.pages.map(p => p.alias).includes(router.asPath.split('/')[2])) {
            m.isOpened = !m.isOpened;
          }
          return (
            <li key={m._id.secondCategory}>
              <button
                className={styles.secondLevel}
                onClick={() => openSecondLevel(m._id.secondCategory)}
                onKeyDown={(key: KeyboardEvent) => openSecondLevelKey(key, m._id.secondCategory)}
                aria-expanded={m.isOpened}
              >
                {m._id.secondCategory}
              </button>
              <motion.ul
                layout
                variants={variants}
                initial={m.isOpened ? 'visible' : 'hidden'}
                animate={m.isOpened ? 'visible' : 'hidden'}
                className={styles.secondLevelBlock}
              >
                {buildThirdLevel(menuItem.route, m.pages, m.isOpened ?? false)}
              </motion.ul>
            </li>);
        })}
      </ul>
    );
  };

  const buildThirdLevel = (route: string, pages: PageItem[], isOpen: boolean): JSX.Element[] => {
    return (
      pages.map(page => (
        <motion.li
          key={page._id}
          variants={variantsChildren}
        >
          <Link href={`/${route}/${page.alias}`}>
            <a
              className={cn(styles.thirdLevel,
                {[styles.thirdLevelActive] : `/${route}/${page.alias}` === router.asPath})
              }
              tabIndex={isOpen ? 0 : -1}
              aria-current={`/${route}/${page.alias}` === router.asPath ? 'page' : false}
            >
              {page.category}
            </a>
          </Link>
        </motion.li>
      ))
    );
  };
  
  return (
    <nav
      className={styles.menu} 
      role="navigation"
    >
      {announce && <span className="visually-hidden" role="log">{announce === 'opened' ? 'open' : 'close'}</span>}
      {buildFirstLevel()}
    </nav>
  );
};

export default Menu;
