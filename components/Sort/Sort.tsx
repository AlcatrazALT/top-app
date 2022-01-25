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
      <div id='sort' className={styles.sortName}>Sort</div>
      <button
        id='rating'
        className={cn(
          {[styles.active]: sort === SortEnum.Rating}
        )}
        onClick={() => setSort(SortEnum.Rating)}
        aria-selected={sort == SortEnum.Rating}
        aria-labelledby="sort rating"
      >
        <SortIcon className={styles.sortIcon} />By rating
      </button>
      <button
        id='price'
        className={cn(
          {[styles.active]: sort === SortEnum.Price}
        )}
        onClick={() => setSort(SortEnum.Price)}
        aria-selected={sort == SortEnum.Price}
        aria-labelledby="sort price"
      >
        <SortIcon className={styles.sortIcon} />By price
      </button>
    </div>
  );
};

export default Sort;
