import React from 'react';
import { Advantages, HhData, Htag, Paragraph, Tag } from '../../components';
import { TopPageComponentProps } from './TopPageComponent.props';
import styles from './TopPageComponent.module.css';
import { TopLevelCategory } from '../../types';

const TopPageComponent = ({page, firstCategory, products}: TopPageComponentProps): JSX.Element => {
  return (
    <div>
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

      {firstCategory === TopLevelCategory.Courses &&  page.hh && <HhData {...page.hh} />}
      {page.advantages && page.advantages.length > 0 && <>
        <Htag tag='h2'>
          Advantages
        </Htag>
        <Advantages advantages={page.advantages} />
      </>}
      {page.seoText && <Paragraph>{page.seoText}</Paragraph>}
      <Htag tag='h2'>Skills</Htag>
      {page.tags.map(tag => (
        <Tag key={tag} color='primary'>{tag}</Tag>
      ))}
    </div>
  );
};

export default TopPageComponent;
