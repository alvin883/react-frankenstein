import React from 'react';

import { StandardComponentType } from '../../types';
import { stylesCombinerFn } from '../../utils/styles-combiner';

let DEFAULT_TAG: 'div' = 'div';

export type ButtonIconProps = {
  classNames?: {
    button__icon?: string;
    button__iconSvg?: string;
  };
  svg: React.ElementType;
};

const ButtonIcon: StandardComponentType<typeof DEFAULT_TAG, ButtonIconProps> = (
  props,
) => {
  const { svg: Svg, classNames = {}, className } = props;
  const c = stylesCombinerFn({}, classNames);
  return (
    <div className={c('button__icon', className)}>
      <Svg className={c('button__iconSvg')} />
    </div>
  );
};

export default ButtonIcon;
