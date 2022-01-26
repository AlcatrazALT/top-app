import React, { useEffect, useReducer } from 'react';
import { Advantages, HhData, Htag, Product, Sort, Tag } from '../../components';
import { TopPageComponentProps } from './TopPageComponent.props';
import styles from './TopPageComponent.module.css';
import { TopLevelCategory } from '../../types';
import { SortEnum } from '../../components/Sort/Sort.props';
import { sortReducer } from './sort.reducer';
import { useReducedMotion } from 'framer-motion';

const TopPageComponent = ({page, firstCategory, products}: TopPageComponentProps): JSX.Element => {
  const [{products: sortedProducts, sort}, dispatchSort] = useReducer(sortReducer, {products, sort: SortEnum.Rating});
  const shouldReduceMotion = useReducedMotion();

  const setSort = (sort:SortEnum): void => {
    dispatchSort({type: sort});
  };

  useEffect(() => {
    dispatchSort({type:'reset', initialState: products});
  }, [products]);
  
  return (
    <div>
      <div className={styles.title}>
        <Htag tag='h1'>{page.title}</Htag>
        {products && <Tag color='gray' size='m' aria-label={products.length + 'elements'}>{products.length}</Tag>}
        <Sort sort={sort} setSort={setSort}></Sort>
      </div>

      <div role="list">
        {sortedProducts && sortedProducts.map(product => (
          <Product layout={shouldReduceMotion ? false : true} key={product._id} product={product} role="listitem" />
        ))}
      </div>

      <div className={styles.hhTitle}>
        <Htag tag='h2'>Vacancy - {page.category}</Htag>
        <Tag color='red' size='m'>hh.ru</Tag>
      </div>

      {firstCategory === TopLevelCategory.Courses &&  page.hh && <HhData {...page.hh} />}
      {page.advantages && page.advantages.length > 0 && <>
        <Htag tag='h2'>
          Advantages
        </Htag>
        <Advantages advantages={page.advantages} />
      </>}
      {page.seoText && <div className={styles.seo} dangerouslySetInnerHTML={{__html: page.seoText}} />}
      <Htag tag='h2'>Skills</Htag>
      {page.tags.map(tag => (
        <Tag key={tag} color='primary'>{tag}</Tag>
      ))}
    </div>
  );
};

export default TopPageComponent;
