import React from 'react';
import PropTypes from 'prop-types';

import styles from './button.module.scss';
import { StandardComponentType } from '../../types';
import { stylesCombinerFn } from '../../utils/styles-combiner';

let DEFAULT_TAG: 'button' = 'button';

type SizeEnum = 'small' | 'normal' | 'jumbo';
type VariantEnum = 'fab' | 'fab-circle' | 'outlined' | 'contained';
type ColorEnum = 'primary' | 'secondary';

export type ButtonProps = {
  classNames?: object;
  color?: ColorEnum;
  disabled?: boolean;
  iconEnd?: React.ElementType;
  iconStart?: React.ElementType;
  isLoading?: boolean;
  size?: SizeEnum;
  text?: string;
  variant?: VariantEnum;
};

const Button: StandardComponentType<typeof DEFAULT_TAG, ButtonProps> = (
  props,
) => {
  // Default props
  const {
    as: Tag = DEFAULT_TAG,
    classNames = {},
    className,
    size = 'normal',
    variant = 'contained',
    color = 'primary',
    disabled = false,
    isLoading = false,
  } = props;

  const c = stylesCombinerFn(styles, classNames);

  return (
    <Tag
      className={c('button', className, {
        [c[`size-${size}`]]: size,
        [c[`color-${color}`]]: color,
        [c[`variant-${variant}`]]: variant,
        [c[`is-loading`]]: isLoading,
        [c[`is-disabled`]]: disabled,
      })}
      disabled={props.disabled || isLoading}
    ></Tag>
  );
};

Button.propTypes = {
  size: PropTypes.oneOf<SizeEnum>(['small', 'normal', 'jumbo']),
  variant: PropTypes.oneOf<VariantEnum>(['fab', 'fab-circle']),
  color: PropTypes.oneOf<ColorEnum>(['primary', 'secondary']),
};

export default Button;
