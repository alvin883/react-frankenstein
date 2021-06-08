import React from 'react';

import { StandardComponentType } from '../../types';

let DEFAULT_TAG: 'div' = 'div';

export type ButtonTextProps = {
  className?: string;
};

const ButtonText: StandardComponentType<typeof DEFAULT_TAG, ButtonTextProps> = (
  props,
) => {
  const { as: Tag = DEFAULT_TAG, children } = props;
  return <Tag className={props.className}>{children}</Tag>;
};

export default ButtonText;
