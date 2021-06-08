import clsx, { ClassValue } from 'clsx';

/**
 * Combiner function generator
 */
const stylesCombinerFn =
  (styles1: object, styles2: object) =>
  (className: string, ...classNames: ClassValue[]) => {
    return clsx(styles1?.[className], styles2?.[className], ...classNames);
  };

const stylesCombiner = (
  styles1: object,
  styles2: object,
  className: string,
  ...classNames: string[]
) => {
  return stylesCombinerFn(styles1, styles2)(className, ...classNames);
};

export { stylesCombinerFn };
export default stylesCombiner;
