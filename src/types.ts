import * as React from 'react';

export type PropsOf<T> = T extends React.ElementType
  ? React.ComponentProps<T>
  : never;

export type HTMLTagMapOrAny<T> = T extends keyof HTMLElementTagNameMap
  ? HTMLElementTagNameMap[T]
  : any;

export type StandardProps<TagType> = {
  as?: TagType;
  asProps?: PropsOf<TagType>;
  children?: React.ReactNode;
  /**
   * Remove default className from the component?
   */
  removeDefault?: boolean;
  className?: string;
};

/**
 *
 */
export type StandardComponentTypeProps<TagType, Props> = Props &
  StandardProps<TagType> &
  Omit<
    PropsOf<TagType>,
    // if Props has key, then exclude all of Props key
    (Props extends {} ? never : keyof Props) | keyof StandardProps<TagType>
  >;

/**
 * Standardize component type combined with dynamic as props and default tag
 * type
 */
export type StandardComponentType<DefaultTag extends React.ElementType, Props> =
  (<TagType extends React.ElementType = DefaultTag>(
    props: StandardComponentTypeProps<TagType, Props>,
  ) => React.ReactElement) & {
    propTypes?: React.WeakValidationMap<Props>;
  };

export type StandardComponentWithClassName<DT extends React.ElementType, P> =
  StandardComponentType<DT, P> & {
    styles: string;
  };

export type ClassNamesType<S extends string> = {
  [key in S]?: string;
};

// type ClassNamesTypeUsageExample = {
//   classNames: ClassNamesType<'button' | 'button__inner'>;
// };

// const ClassNamesUsageExample: ClassNamesTypeUsageExample = {
//   classNames: {
//     button: 's'
//   }
// };

export type ExtendPropEnum<
  Props,
  PropsKey extends keyof Props,
  AdditionalEnums,
> = Omit<Props, PropsKey> &
  {
    [Key in keyof Props]: Props[Key] | AdditionalEnums;
  };

export type ExtendProps<
  Props,
  Extension extends { [Key in keyof Props]?: any },
> = Omit<Props, keyof Extension> &
  {
    [Key in keyof Extension]:
      | (Key extends keyof Props ? Props[Key] : never)
      | Extension[Key];
  };

// export type ExtendUIComponent<Props> = StandardComponentType<

// ,
// ExtendedButtonProps
// >;

// type TestProps = {
//   variant: 'contained' | 'outlined';
//   color?: 'primary' | 'secondary';
//   href?: string;
// };

// type ExtendTestProps = ExtendProps<
//   TestProps,
//   {
//     variant: 'fab' | 'fab-circle';
//     asal: 'asdasda' | 'asd';
//   }
// >;

// const test: ExtendTestProps = {
//   variant: 'fab-circle',
// };
