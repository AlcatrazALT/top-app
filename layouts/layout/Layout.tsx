import React from 'react';
import { LayoutProps } from './Layout.props';
import styles from './Layout.module.css';
import cn from 'classnames';
import Header from '../header/Header';
import Sidebar from '../sidebar/Sidebar';
import Footer from '../footer/Footer';

const Layout = ({children}: LayoutProps) => {
  return (
    <>
      <Header />
      <main>
        <Sidebar />
        <div>
          {children}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Layout;
