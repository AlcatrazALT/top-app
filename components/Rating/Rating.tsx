import React, { ForwardedRef, forwardRef, useEffect, useState } from 'react';
import { RatingProps } from './Rating.props';
import styles from './Rating.module.css';
import cn from 'classnames';
import StarIcon from './star.svg';

const Rating = forwardRef(({isEditable = false, rating, setRating, className, ...props}: RatingProps, ref: ForwardedRef<HTMLDivElement>): JSX.Element => {
  const [ratingArray, setRatingArray] = useState<JSX.Element[]>(new Array(5).fill(<></>));
  
  useEffect(() => {
    constructRating(rating);
  }, [rating]);

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
          tabIndex={isEditable ? 0 : -1}
          onKeyDown={(event) => isEditable && onKeyDown(index+1, event)}
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
    if(isEditable && setRating) {
      setRating(updatedRating);
    }
  };

  const onKeyDown = (updatedRating: number, event: React.KeyboardEvent<HTMLSpanElement>) => {
    if(event.code != 'Space' || !setRating) {
      return;
    }
    setRating(updatedRating);
  };

  return (
    <div {...props} ref={ref}>
      {ratingArray.map((rating, index) => (<span key={index}>{rating}</span>))}
    </div>
  );
});

export default Rating;
