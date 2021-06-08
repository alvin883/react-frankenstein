import * as React from 'react';
import PropTypes from 'prop-types';

import styles from './button.module.scss';
import { StandardComponentType } from '../../types';
import { stylesCombinerFn } from '../../utils/styles-combiner';
import ButtonIcon from './button-icon';
import ButtonLoading from './button-loading';
import ButtonText from './button-text';

let DEFAULT_TAG: 'button' = 'button';

type SizeEnum = 'small' | 'normal' | 'jumbo';
type VariantEnum = 'fab' | 'fab-circle' | 'outlined' | 'contained';
type ColorEnum = 'primary' | 'secondary';

export type ButtonProps = {
  classNames?: {
    button?: string;
    button__icon?: string;
    button__iconStart?: string;
    button__iconEnd?: string;
    button__text?: string;
    button__loading?: string;
  };
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
    className = null,
    size = 'normal',
    variant = 'contained',
    color = 'primary',
    disabled = false,
    isLoading,
    children,
  } = props;

  const c = stylesCombinerFn(styles, classNames);

  return (
    <Tag
      {...props}
      className={c('button', className, {
        [styles[`size-${size}`]]: size,
        [styles[`color-${color}`]]: color,
        [styles[`variant-${variant}`]]: variant,
        [styles[`is-loading`]]: isLoading,
        [styles[`is-disabled`]]: disabled,
      })}
      disabled={props.disabled || isLoading}
    >
      {children ? (
        typeof children === 'function' ? (
          children()
        ) : (
          children
        )
      ) : (
        <div className={c('button__wrapper')}>
          {isLoading ? (
            <ButtonLoading
              classNames={{
                loading: c('button__loading'),
                loading__icon: c('button__icon', c('button__iconLoading')),
                animation: c('button__loadingAnimation'),
              }}
            />
          ) : null}
          {props.iconStart ? (
            <ButtonIcon
              className={c('button__icon', c('button__iconStart'))}
              svg={props.iconStart}
            />
          ) : null}
          {props.text ? (
            <ButtonText className={c('button__text')}>{props.text}</ButtonText>
          ) : null}
          {props.iconEnd ? (
            <ButtonIcon
              className={c('button__icon', c('button__iconEnd'))}
              svg={props.iconEnd}
            />
          ) : null}
        </div>
      )}
    </Tag>
  );
};

// TODO: iconStart & iconEnd props
Button.propTypes = {
  classNames: PropTypes.object,
  color: PropTypes.oneOf<ColorEnum>(['primary', 'secondary']),
  disabled: PropTypes.bool,
  isLoading: PropTypes.bool,
  size: PropTypes.oneOf<SizeEnum>(['small', 'normal', 'jumbo']),
  text: PropTypes.string,
  variant: PropTypes.oneOf<VariantEnum>(['fab', 'fab-circle']),
};

export { Button };
export default Button;
