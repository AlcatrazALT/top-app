import React from 'react';
import { TopPageComponentProps } from './TopPageComponent.props';

const TopPageComponent = ({page, firstCategory, products}: TopPageComponentProps): JSX.Element => {
  return (
    <div>
      {products && products.length}
    </div>
  );
};

export default TopPageComponent;
