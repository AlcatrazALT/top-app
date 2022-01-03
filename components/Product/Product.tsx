import React from 'react';
import styles from './Product.module.css';
import cn from 'classnames';
import { ProductProps } from './Product.props';
import { Button, Card, Rating, Tag } from '..';

const Product = ({product, className, ...props}: ProductProps): JSX.Element => {
  return (
    <Card className={styles.product}>
      <div className={styles.logo}>
        <img src={process.env.NEXT_PUBLIC_DOMAIN + product.image} alt={product.title} />
      </div>
      <div className={styles.title}>
        {product.title}
      </div>
      <div className={styles.price}>
        {product.price}
      </div>
      <div className={styles.credit}>
        {product.credit}
      </div>
      <div className={styles.rating}>
        <Rating rating={product.reviewAvg ?? product.initialRating} />
      </div>
      <div className={styles.tags}>
        {product.categories.map(category => {
          return (
          <Tag key={category} color='ghost'>
            {category}
          </Tag>);
        })}
      </div>
      <div className={styles.priceTitle}>
        Price
      </div>
      <div className={styles.creditTitle}>
        Credit
      </div>
      <div className={styles.rateTitle}>
        {product.reviewCount} reviews
      </div>
      <div className={styles.hr}>
        <hr className={styles.hr}/>
      </div>
      <div className={styles.description}>
        {product.description}
      </div>
      <div className={styles.feature}>
        feature
      </div>
      <div className={styles.advantagesBlock}>
        <div className={styles.advantages}>
          <div>Advantages</div>
          {product.advantages}
        </div>
        <div className={styles.disadvantages}>
          <div>Disadvantages</div>
          {product.disadvantages}
        </div>
      </div>
      <div className={styles.hr}>
        <hr />
      </div>
      <div className={styles.actions}>
        <Button appearance='primary'>Read more</Button>
        <Button appearance='ghost' arrow={'right'}>Read reviews</Button>
      </div>
    </Card>
  );
};

export default Product;
