import { ReactNode } from 'react';
import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface CardProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  color?: 'white' | 'blue'
  children: ReactNode
}
