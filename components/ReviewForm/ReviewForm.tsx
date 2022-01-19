import React, { useState } from 'react';
import { ReviewFormProps } from './ReviewForm.props';
import cn from 'classnames';
import styles from './ReviewForm.module.css';
import { Button, Input, Rating, Textarea } from '..';
import CloseIcon from './close.svg';
import { Controller, useForm } from 'react-hook-form';
import { IReviewForm, IReviewSendResponse } from './ReviewForm.interface';
import axios from 'axios';
import { API } from '../../helpers';

const ReviewForm = ({productId, isOpen, className, ...props}: ReviewFormProps):JSX.Element => {
  const {register, control, handleSubmit, formState: {errors}, reset} = useForm<IReviewForm>();
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string>();

  const onSubmit = async (formData: IReviewForm) => {
    try {
      const {data} = await axios.post<IReviewSendResponse>(API.review.createDemo, {...formData, productId});
      if(data.message) {
        setIsSuccess(true);
        reset();
      } else {
        setError('Error');
      }
    }
    catch (e) {
      const err:any = e;
      setError(err.message);
    }
    
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div
        className={cn(className, styles.reviewForm)}
        {...props}
      >
        <Input
          placeholder='Name'
          error={errors.name}
          {...register('name', { required: {value: true, message: 'Name is required'}})}
          tabIndex={isOpen ? 0 : -1}
        />
        <Input 
          className={styles.title} 
          placeholder='Review title'
          error={errors.title}
          {...register('title', { required: {value: true, message: 'Review title is required'}})}
          tabIndex={isOpen ? 0 : -1}
        />
        <div className={styles.rating}>
          <span>Estimation:</span>
          <Controller
            control={control}
            name='rating'
            rules={{ required: {value: true, message: 'Rating is required'}}}
            render={({field}) => (
              <Rating
                isEditable
                rating={field.value}
                setRating={field.onChange}
                ref={field.ref}
                error={errors.rating}
              />
            )}
          />
        </div>
        <Textarea 
          className={styles.description} 
          placeholder='Review text'
          error={errors.description}
          {...register('description', { required: {value: true, message: 'Description is required'}})}
          tabIndex={isOpen ? 0 : -1}
        />
        <div className={styles.submit}>
          <Button appearance='primary' tabIndex={isOpen ? 0 : -1}>Send</Button>
          <span className={styles.info}>* before publication, the review will undergo preliminary moderation and verification</span>
        </div>
      </div>
      {isSuccess &&
      <div className={cn(styles.success, styles.panel)}>
        <div className={styles.successTitle}>
          Review sended
        </div>
        <div>
          The review will be published after verification.
        </div>
        <CloseIcon className={styles.close} onClick={() => setIsSuccess(false)} />
      </div>
      }
    {error &&
      <div className={cn(styles.error, styles.panel)}>
        {'Something went wrong, reload page'}
        <CloseIcon className={styles.close} onClick={() => setError(undefined)} />
      </div>
      }
    </form>
  );
};

export default ReviewForm;
