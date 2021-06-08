import React from 'react';
import clsx from 'clsx';

import styles from './button.module.scss';
import { StandardComponentType } from '../../types';

let DEFAULT_TAG: 'div' = 'div';

export type ButtonIconProps = {
  className?: string;
  svg: React.ElementType;
};

const ButtonIcon: StandardComponentType<typeof DEFAULT_TAG, ButtonIconProps> = (
  props,
) => {
  const Svg = props.svg;
  return (
    <div className={clsx(styles.button__icon, props.className)}>
      <Svg />
    </div>
  );
};

export default ButtonIcon;
