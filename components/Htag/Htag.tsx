import React from 'react';
import { HtagProps, HtagType } from './Htag.props';
import styles from './Htag.module.css';

const Htag = ({tag, children}: HtagProps) => {
  switch (tag) {
    case HtagType.h1:
      return <h1 className={styles.h1}>{children}</h1>;
    case HtagType.h2:
      return <h2 className={styles.h2}>{children}</h2>;
    case HtagType.h3:
      return <h3 className={styles.h3}>{children}</h3>;
    default:
      return <></>;
  }
};

export default Htag;
