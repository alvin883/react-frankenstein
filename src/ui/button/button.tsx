import React from 'react';
import PropTypes from 'prop-types';

import { StandardComponentType } from '../../types';

let DEFAULT_TAG: 'div' = 'div';

export type ButtonProps = {
  size?: 'small' | 'normal' | 'jumbo';
};

const Button: StandardComponentType<typeof DEFAULT_TAG, ButtonProps> = (
  props,
) => {
  return <button className={props.size}></button>;
};

Button.propTypes = {
  size: PropTypes.string,
};

export default Button;
