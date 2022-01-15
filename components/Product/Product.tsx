import React, { ForwardedRef, forwardRef, useRef, useState } from 'react';
import styles from './Product.module.css';
import cn from 'classnames';
import { ProductProps } from './Product.props';
import { Button, Card, Divider, Rating, Review, ReviewForm, Tag } from '..';
import { price } from '../../helpers';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Product = motion(forwardRef(({product, className, ...props}: ProductProps, ref: ForwardedRef<HTMLDivElement>): JSX.Element => {
  const [isReviewOpened, setIsReviewOpened] = useState(false);
  const reviewRef = useRef<HTMLDivElement>(null);

  const variants = {
    visible: {
      opacity: 1,
      height: 'auto'
    },
    hidden: {
      opacity: 0,
      height: 0
    }
  };

  const toggleReviews = (): void => {
    setIsReviewOpened(!isReviewOpened);
  };

  const scrollToReview = (): void => {
    setIsReviewOpened(true);
    reviewRef.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  };

  return (
    <div className={className} ref={ref} {...props}>
      <Card className={styles.product}>
        <div className={styles.logo}>
          <Image
            src={process.env.NEXT_PUBLIC_DOMAIN + product.image}
            alt={product.title}
            width={70}
            height={70}
          />
          </div>
        <div className={styles.title}>
          {product.title}
        </div>
        <div className={styles.price}>
          {price(product.price)}
          {product.oldPrice && <Tag className={styles.oldPrice} color='green'>{price(product.price - product.oldPrice)}</Tag>}
        </div>
        <div className={styles.credit}>
          {price(product.credit)}/<span className={styles.month}>month</span>
        </div>
        <div className={styles.rating}>
          <Rating rating={product.reviewAvg ?? product.initialRating} />
        </div>
        <div className={styles.tags}>
          {product.categories.map(category => {
            return (
            <Tag
              className={styles.category}
              key={category}
              color='ghost'
            >
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
          <a
            href="#ref"
            onClick={scrollToReview}
          >
            {product.reviewCount} reviews
          </a>
        </div>
        <Divider className={styles.hr} />
        <div className={styles.description}>
          {product.description}
        </div>
        <div className={styles.feature}>
          {product.characteristics.map(characteristic => (
            <div className={styles.characteristic} key={characteristic.name}>
              <span className={styles.characteristicName}>{characteristic.name}</span>
              <span className={styles.characteristicDots}></span>
              <span className={styles.characteristicValue}>{characteristic.value}</span>
            </div>
          ))}
        </div>
        <div className={styles.advantagesBlock}>
          {product.advantages &&
          <div className={styles.advantages}>
            <div className={styles.advantagesTitle}>Advantages</div>
            {product.advantages}
          </div>}

          {product.disadvantages &&
          <div className={styles.disadvantages}>
            <div className={styles.advantagesTitle}>Disadvantages</div>
            {product.disadvantages}
          </div>}
        </div>
        <Divider className={cn(styles.hr, styles.hr2)} />
        <div className={styles.actions}>
          <Button appearance='primary'>Read more</Button>
          <Button
            className={styles.reviewButton}
            appearance='ghost' 
            arrow={isReviewOpened ? 'down': 'right'}
            onClick={toggleReviews}
          >Read reviews</Button>
        </div>
      </Card>
      <motion.div
        variants={variants}
        initial={'hidden'}
        animate={isReviewOpened ? 'visible' : 'hidden'}
      >
        <Card
          className={cn(styles.reviews)}
          color='blue'
          ref={reviewRef}
        >
          {product.reviews.map(review => (
            <div key={review._id}>
              <Review
                review={review}
              />
              <Divider />
            </div>
          ))}
          <ReviewForm productId={product._id} />
        </Card>
      </motion.div>
    </div>
  );
}));

export default Product;
