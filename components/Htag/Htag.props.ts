import { ReactNode } from "react";

export interface HtagProps {
  tag: HtagType;
  children: ReactNode
}

export enum HtagType {
  'h1',
  'h2',
  'h3',
}
