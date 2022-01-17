import React, { FunctionComponent, useState, KeyboardEvent, useRef } from 'react';
import { LayoutProps } from './Layout.props';
import styles from './Layout.module.css';
import Header from '../header/Header';
import Sidebar from '../sidebar/Sidebar';
import Footer from '../footer/Footer';
import { AppContextProvider } from '../../contexts/app.context';
import { IAppContext } from '../../types';
import { Up } from '../../components';
import cn from 'classnames';

const Layout = ({children}: LayoutProps): JSX.Element => {
  const [isSkipLinkDisplay, setIsSkipLinkDisplay] = useState(false);
  const bodyRef = useRef<HTMLDivElement>(null); 

  const skipContentAction = (key: KeyboardEvent) => {
    if (key.code == 'Space' || key.code == 'Enter') {
      key.preventDefault();
      bodyRef.current?.focus();
    }
    setIsSkipLinkDisplay(false);
  };
  
  return (
    <div className={styles.wrapper}>
      <a 
        tabIndex={10}
        className={cn(styles.skipLink, {
          [styles.displayed]: isSkipLinkDisplay
        })}
        onFocus={() => setIsSkipLinkDisplay(true)}
        onKeyDown={skipContentAction}
      >
        To content
      </a>
      <Header className={styles.header} />
      <Sidebar className={styles.sidebar} />
      <div className={styles.body} ref={bodyRef} tabIndex={0}>
        {children}
      </div>
      <Footer className={styles.footer} />
      <Up />
    </div>
  );
};

export const withLayoutHOC = <T extends Record<string, unknown> & IAppContext>(Component: FunctionComponent<T>) => {
  return function withLayoutComponent(props: T) {
    return (
      <AppContextProvider menu={props.menu} firstCategory={props.firstCategory}>
        <Layout>
          <Component {...props}/>
        </Layout>
      </AppContextProvider>
    );
  };
};
