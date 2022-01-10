import React from 'react';
import { ReviewFormProps } from './ReviewForm.props';
import cn from 'classnames';
import styles from './ReviewForm.module.css';
import { Button, Input, Rating, Textarea } from '..';
import CloseIcon from './close.svg';

const ReviewForm = ({productId, className, ...props}: ReviewFormProps):JSX.Element => {
  return (
    <>
      <div
        className={cn(className, styles.reviewForm)}
        {...props}
      >
        <Input placeholder='Name' />
        <Input className={styles.title} placeholder='Review title' />
        <div className={styles.rating}>
          <span>Estimation:</span>
          <Rating rating={0} />
        </div>
        <Textarea className={styles.description} placeholder='Review text' />
        <div className={styles.submit}>
          <Button appearance='primary'>Send</Button>
          <span className={styles.info}>* before publication, the review will undergo preliminary moderation and verification</span>
        </div>
      </div>
      <div className={styles.success}>
        <div className={styles.successTitle}>
          Review sended
        </div>
        <div>
          The review will be published after verification.
        </div>
        <CloseIcon className={styles.close} />
      </div>
    </>
  );
};

export default ReviewForm;
