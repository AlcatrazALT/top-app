import React from 'react';
import { ReviewFormProps } from './ReviewForm.props';
import cn from 'classnames';
import styles from './ReviewForm.module.css';
import { Button, Input, Rating, Textarea } from '..';
import CloseIcon from './close.svg';
import { Controller, useForm } from 'react-hook-form';
import { IReviewForm } from './ReviewForm.interface';

const ReviewForm = ({productId, className, ...props}: ReviewFormProps):JSX.Element => {
  const {register, control, handleSubmit, formState} = useForm<IReviewForm>();

  const onSubmit = (data: IReviewForm) => {
    console.log('data', data)
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div
        className={cn(className, styles.reviewForm)}
        {...props}
      >
        <Input
          placeholder='Name'
          {...register('name')}
        />
        <Input 
          className={styles.title} 
          placeholder='Review title'
          {...register('title')}
        />
        <div className={styles.rating}>
          <span>Estimation:</span>
          <Controller
            control={control}
            name='rating'
            render={({field}) => (
              <Rating isEditable rating={field.value} setRating={field.onChange} ref={field.ref} />
            )}
          />
        </div>
        <Textarea 
          className={styles.description} 
          placeholder='Review text'
          {...register('description')}
        />
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
    </form>
  );
};

export default ReviewForm;
