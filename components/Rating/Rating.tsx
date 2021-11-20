import React, { useEffect, useState } from 'react';
import { RatingProps } from './Rating.props';
import styles from './Rating.module.css';
import cn from 'classnames';
import StarIcon from './star.svg';

const Rating = ({isEditable = false, rating, setRating, className, ...props}: RatingProps) => {
  const [ratingArray, setRatingArray] = useState<JSX.Element[]>(new Array(5).fill(<></>));
  
  useEffect(() => {
    constructRating(rating);
  }, [rating]);

  const constructRating = (currentRating: number) => {
    const updatedArray = ratingArray.map((rating, index) => {
      return (
        <span
          className={cn(styles.star, {
            [styles.filled]: index < currentRating
          })}
        >
          <StarIcon/>
        </span>
      );
    });

    setRatingArray(updatedArray);
  };

  return (
    <div {...props}>
      {ratingArray.map((rating, index) => (<span key={index}>{rating}</span>))}
    </div>
  );
};

export default Rating;
