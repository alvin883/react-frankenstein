import clsx, { ClassValue } from 'clsx';

type CombinedProperties<T1, T2> = {
  [key in keyof T1]: string;
} &
  {
    [key in keyof T2]: string;
  };

function stylesCombine<T1 extends object, T2 extends object>(
  styles1: T1,
  styles2: T2,
): CombinedProperties<typeof styles1, typeof styles2>;

function stylesCombine<T1 extends object, T2 extends object>(
  styles1: T1,
  styles2: T2,
  includeMissingKey: false,
): {
  [key in keyof T1]: string;
};

/**
 * Combine 2 CSS Modules keys object into one object
 * @param styles1
 * @param styles2
 */
function stylesCombine<T1 extends object, T2 extends object>(
  styles1: T1,
  styles2: T2,
  includeMissingKey: boolean = true,
) {
  let result = {};

  Object.keys(styles1).map((key) => {
    result[key] = clsx(styles1[key], styles2[key]);
  });

  if (!includeMissingKey) return result;

  /**
   * Key list that doesn't exist on styles1
   */
  const missingKeys = Object.keys(styles2).filter(
    (key) => typeof styles1[key] === 'undefined',
  );

  missingKeys.forEach((key) => {
    result[key] = clsx(styles2[key]);
  });

  return result as CombinedProperties<typeof styles1, typeof styles2>;
}

/**
 * Combine 2 CSS Modules keys object into one object and get the function for
 * calling combined key in clsx-like way, it's pretty much the same goal as
 * `stylesCombine` but with simpler API
 *
 * @example
 * import styles1 from "./styles1.module.scss"
 * const Component = ({ classNames }) => {
 *  // c is short for `combined`
 *  const c = stylesCombinerFn(styles1, classNames)
 *  return <div className={c('button', 'is-disabled')}></div>
 * }
 */
const stylesCombinerFn = <T1 extends object, T2 extends object>(
  styles1: T1,
  styles2: T2,
) => {
  const combinedStyles = stylesCombine(styles1, styles2, false);
  const output = (...classNames: ClassValue[]) => {
    // This class also contain non-string format `undefined | false | true`
    // therefore we need clsx to cleanup those value
    const combinedClassNames = classNames.reduce<ClassValue[]>(
      (result, className) => {
        if (typeof className !== 'string') return [...result, ...[className]];

        // If key didn't exist, just combine with the raw string, because it's
        // likely that user want to add compiled string from CSS modules
        const isKeyExist = typeof combinedStyles[className] === 'string';
        const c = isKeyExist ? [combinedStyles[className]] : [className];
        return [...result, ...c];
      },
      [],
    );

    return clsx(...combinedClassNames);
  };

  output.value = combinedStyles;
  return output;
};

const stylesCombiner = (
  styles1: object,
  styles2: object,
  className: string,
  ...classNames: string[]
) => {
  return stylesCombinerFn(styles1, styles2)(className, ...classNames);
};

export { stylesCombine, stylesCombinerFn };
export default stylesCombiner;
