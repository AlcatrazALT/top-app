import React from 'react';
import styles from './ButtonIcon.module.css';
import cn from 'classnames';
import { ButtonIconProps, icons } from './ButtonIcon.props';

const ButtonIcon = ({icon, appearance, className, ...props}: ButtonIconProps): JSX.Element => {
  const IconComponent = icons[icon];
  return (
    <button
      className={cn(styles.button, className, {
        [styles.primary]: appearance === 'primary',
        [styles.white]: appearance === 'white'
      })}
      {...props}
    >
      <IconComponent />
    </button>
  );
};

export default ButtonIcon;
