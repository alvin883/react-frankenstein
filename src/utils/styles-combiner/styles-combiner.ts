import clsx, { ClassValue } from 'clsx';

/**
 * Combiner function generator
 */
const stylesCombinerFn =
  (styles1: object, styles2: object) =>
  (...classNames: ClassValue[]) => {
    // This class also contain non-string format `undefined | false | true`
    // therefore we need clsx to cleanup those value
    const combined = classNames.reduce<ClassValue[]>((result, className) => {
      if (typeof className !== 'string') return [...result, ...[className]];

      const isKeyExist = styles1?.[className] || styles2?.[className];

      // If key didn't exist, just combine with the raw string, because it's
      // likely that the author want to add compiled string from CSS modules
      const c = isKeyExist
        ? [styles1?.[className], styles2?.[className]]
        : [className];

      return [...result, ...c];
    }, []);
    return clsx(...combined);
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
