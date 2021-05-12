import clsx from 'clsx';
import { StandardComponentType } from 'react-frankenstein';

import styles from './button.module.scss';

let DEFAULT_TAG: 'button' = 'button';

type ButtonProps = {};

const Button: StandardComponentType<typeof DEFAULT_TAG, ButtonProps> = ({
  as: Tag = DEFAULT_TAG,
  children,
  ...props
}) => {
  return (
    <Tag {...props} className={clsx(styles.button, props.className)}>
      {children}
    </Tag>
  );
};

export default Button;
