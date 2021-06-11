import React from 'react';
import PropTypes from 'prop-types';

import styles from './button.module.scss';
import {
  ExtendProps,
  ModifierClassNames,
  StandardComponentType,
  standardPropKeys,
} from '../../types';
import { stylesCombinerFn } from '../../utils/styles-combiner';
import getUncontrolledProps from '../../utils/get-uncontrolled-props';
import ButtonIcon from './button-icon';
import ButtonLoading from './button-loading';
import ButtonText from './button-text';

let DEFAULT_TAG: 'button' = 'button';

type SizeType = 'small' | 'normal' | 'jumbo';
type VariantType = 'fab' | 'fab-circle' | 'outlined' | 'contained';
type ColorType = 'primary' | 'secondary';

export type ButtonProps<
  GenericColorType extends string = ColorType,
  GenericSizeType extends string = SizeType,
  GenericVariantType extends string = VariantType,
> = {
  classNames?: {
    button?: string;
    button__icon?: string;
    button__iconStart?: string;
    button__iconEnd?: string;
    button__text?: string;
    button__loading?: string;
  } & ModifierClassNames<'color', ColorType | GenericColorType> &
    ModifierClassNames<'size', SizeType | GenericSizeType> &
    ModifierClassNames<'variant', VariantType | GenericVariantType>;
  color?: ColorType | GenericColorType | string;
  disabled?: boolean;
  iconEnd?: React.ElementType;
  iconStart?: React.ElementType;
  isLoading?: boolean;
  size?: SizeType | GenericSizeType | string;
  text?: string;
  variant?: VariantType | GenericVariantType | string;
};

export type ExtendButtonProps<Props> = StandardComponentType<
  typeof DEFAULT_TAG,
  ExtendProps<
    ButtonProps<
      Props extends { color: string } ? Props['color'] : never,
      Props extends { size: string } ? Props['size'] : never,
      Props extends { variant: string } ? Props['variant'] : never
    >,
    Props
  >
>;

export const Button: StandardComponentType<typeof DEFAULT_TAG, ButtonProps> = (
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
    removeDefault,
    children,
  } = props;

  const c = stylesCombinerFn(removeDefault ? {} : styles, classNames);

  // TODO: Find a way to transform ts type keys into array
  // candidate: ts-transformer-keys
  const controlledProps = [
    ...standardPropKeys,
    'classNames',
    'color',
    'disabled',
    'iconEnd',
    'iconStart',
    'isLoading',
    'size',
    'text',
    'variant',
  ];

  const uncontrolledProps = React.useCallback(
    () => getUncontrolledProps(props, controlledProps),
    [],
  );

  return (
    <Tag
      {...uncontrolledProps}
      className={c(
        'button',
        className,
        size && c(`size-${size}`),
        color && c(`color-${color}`),
        variant && c(`variant-${variant}`),
        isLoading && c(`is-loading`),
        disabled && c(`is-disabled`),
      )}
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
              classNames={{
                button__icon: c('button__icon', c('button__iconStart')),
                button__iconSvg: c('button__iconSvg'),
              }}
              svg={props.iconStart}
            />
          ) : null}
          {props.text ? (
            <ButtonText className={c('button__text')}>{props.text}</ButtonText>
          ) : null}
          {props.iconEnd ? (
            <ButtonIcon
              classNames={{
                button__icon: c('button__icon', c('button__iconEnd')),
                button__iconSvg: c('button__iconSvg'),
              }}
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
  // color: PropTypes.oneOf<ColorEnum>(['primary', 'secondary']),
  disabled: PropTypes.bool,
  isLoading: PropTypes.bool,
  // size: PropTypes.oneOf<SizeEnum>(['small', 'normal', 'jumbo']),
  text: PropTypes.string,
  // variant: PropTypes.oneOf<VariantEnum>(['fab', 'fab-circle']),
};
