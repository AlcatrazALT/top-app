import React from 'react';
import { SortEnum, SortProps } from './Sort.props';
import styles from './Sort.module.css';
import cn from 'classnames';
import SortIcon from './sort.svg';

const Sort = ({sort, setSort, className, ...props}: SortProps): JSX.Element => {
  return (
    <div
      className={cn(className, styles.sort)}
      {...props}
    >
      <span
        className={cn(
          {[styles.active]: sort === SortEnum.Rating}
        )}
        onClick={() => setSort(SortEnum.Rating)}
      >
        <SortIcon className={styles.sortIcon} />By rating
      </span>
      <span
        className={cn(
          {[styles.active]: sort === SortEnum.Price}
        )}
        onClick={() => setSort(SortEnum.Price)}
      >
        <SortIcon className={styles.sortIcon} />By&nbsp;price
      </span>
    </div>
  );
};

export default Sort;
