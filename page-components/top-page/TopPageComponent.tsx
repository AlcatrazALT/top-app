import React from 'react';
import { Htag, Tag } from '../../components';
import { TopPageComponentProps } from './TopPageComponent.props';
import styles from './TopPageComponent.module.css';

const TopPageComponent = ({page, firstCategory, products}: TopPageComponentProps): JSX.Element => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        <Htag tag='h1'>{page.title}</Htag>
        {products && <Tag color='gray' size='m'>{products.length}</Tag>}
        <span>Sort</span>
      </div>

      <div>
        {products && products.map(product => (
          <div key={product._id}>
            {product.title}
          </div>
        ))}
      </div>

      <div className={styles.hhTitle}>
        <Htag tag='h2'>Vacancy - {page.category}</Htag>
        <Tag color='red' size='m'>hh.ru</Tag>
      </div>

      <div className={styles.hh}>
        
      </div>
    </div>
  );
};

export default TopPageComponent;
