import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { ReviewModel } from '../../types';

export interface ReviewProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  review: ReviewModel;
}
