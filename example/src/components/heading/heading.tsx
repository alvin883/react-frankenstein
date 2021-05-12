import clsx from 'clsx';
import { StandardComponentType } from 'react-frankenstein';

import styles from './heading.module.scss';

let DEFAULT_TAG: 'h1' = 'h1';

type HeadingProps = {
  size?: string;
};

const Heading: StandardComponentType<typeof DEFAULT_TAG, HeadingProps> = ({
  as: Tag = DEFAULT_TAG,
  children,
  size = 'h1',
  className
}) => {
  return <Tag className={clsx(styles[size], className)}>{children}</Tag>;
};

export default Heading;
