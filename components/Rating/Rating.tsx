import React, { ForwardedRef, forwardRef, useEffect, useState, KeyboardEvent, useRef } from 'react';
import { RatingProps } from './Rating.props';
import styles from './Rating.module.css';
import cn from 'classnames';
import StarIcon from './star.svg';

const Rating = forwardRef(({error, isEditable = false, rating, setRating, className, tabIndex, ...props}: RatingProps, ref: ForwardedRef<HTMLDivElement>): JSX.Element => {
  const [ratingArray, setRatingArray] = useState<JSX.Element[]>(new Array(5).fill(<></>));
  const ratingArrayRef = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    constructRating(rating);
  }, [rating, tabIndex]);

  const computeFocus = (rating: number, index: number)  => {
    if (!isEditable) {
      return -1;
    }

    if(!rating && index == 0){
      return tabIndex ?? 0;
    }

    if (rating == index + 1) {
      return tabIndex ?? 0;
    }

    return -1;
  };

  const constructRating = (currentRating: number) => {
    const updatedArray = ratingArray.map((ratingEl, index) => {
      return (
        <span
          className={cn(styles.star, {
            [styles.filled]: index < currentRating,
            [styles.editable]: isEditable
          })}
          onMouseEnter={() => changeDisplay(index+1)}
          onMouseLeave={() => changeDisplay(rating)}
          onClick={() => onClick(index+1)}
          tabIndex={computeFocus(rating, index)}
          onKeyDown={handleKey}
          ref={spanElement => ratingArrayRef.current?.push(spanElement)}
        >
          <StarIcon/>
        </span>
      );
    });

    setRatingArray(updatedArray);
  };

  const changeDisplay = (rating: number) => {
    if(isEditable) {
      constructRating(rating);
    }
  };

  const onClick = (updatedRating: number) => {
    if(!isEditable || !setRating) {
      return;
    }
    setRating(updatedRating);
  };

  const handleKey = (e: KeyboardEvent) => {
    if (!isEditable || !setRating) {
      return;
    }

    if (e.code == 'ArrowRight' || e.code == 'ArrowUp') {
      if (!rating) {
        setRating(1);
      } else {
        e.preventDefault();
        setRating(rating < 5 ? rating + 1: 5);
      }
      ratingArrayRef.current[rating]?.focus();
    }

    if (e.code == 'ArrowLeft' || e.code == 'ArrowDown') {
      e.preventDefault();
      setRating(rating > 1 ? rating - 1 : 1);
      ratingArrayRef.current[rating - 2]?.focus();
    }
  };

  return (
    <div
      className={cn(styles.wrapper, {[styles.error]: error})} 
      ref={ref}
      {...props}
    >
      {ratingArray.map((rating, index) => (
        <span key={index}>{rating}</span>
      ))}
      {error && <span className={styles.errorMessage}>{error.message}</span>}
    </div>
  );
});

export default Rating;
