import React from 'react';

import styles from './button.module.scss';
import { StandardComponentType } from '../../types.experimental';
import { stylesCombinerFn } from '../../utils/styles-combiner';
import { ReactComponent as IconLoading } from './button-loading-icon.svg';

let DEFAULT_TAG: 'div' = 'div';

export type ButtonLoadingProps = {
  className?: string;
  classNames?: {
    loading?: string;
    loading__icon?: string;
    animation?: string;
  };
  icon?: React.ElementType;
};

const ButtonLoading: StandardComponentType<
  typeof DEFAULT_TAG,
  ButtonLoadingProps
> = (props) => {
  const { icon: Icon = IconLoading, classNames = {}, className } = props;
  const c = stylesCombinerFn(styles, classNames);
  return (
    <div className={c('loading', c('animation'), className)}>
      <Icon className={c('loading__icon')} />
    </div>
  );
};

export default ButtonLoading;
