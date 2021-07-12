import { stylesCombinerFn, stylesCombine } from './styles-combiner';

const styles_1 = {
  button: 's1__button',
  'is-disabled': 's1__is-disabled',
};

const styles_2 = {
  button: 's2__button',
  'is-disabled': 's2__is-disabled',
  myButton: 's2__myButton',
};

describe('stylesCombinerFn test', () => {
  it('Should combine className from 2 CSS Modules', () => {
    const c = stylesCombinerFn(styles_1, styles_2);
    const result = c('button');
    expect(result).toBe('s1__button s2__button');
  });

  it('Should combine multiple className', () => {
    const c = stylesCombinerFn(styles_1, styles_2);
    const result = c('button', 'is-disabled');
    expect(result).toBe(
      's1__button s2__button s1__is-disabled s2__is-disabled',
    );
  });

  it('Should combine raw CSS Modules className (not the key)', () => {
    const c = stylesCombinerFn(styles_1, styles_2);
    const result = c('button', styles_2.myButton);
    expect(result).toBe('s1__button s2__button s2__myButton');
  });

  it('Should ignore falsy value', () => {
    const c = stylesCombinerFn(styles_1, styles_2);
    const result = c('button', null);
    expect(result).toBe('s1__button s2__button');
  });

  it('Should respect condition className', () => {
    const c = stylesCombinerFn(styles_1, styles_2);
    const result1 = c('button', true && 'is-disabled');
    expect(result1).toBe(
      's1__button s2__button s1__is-disabled s2__is-disabled',
    );

    const result2 = c('button', false && 'is-disabled');
    expect(result2).toBe('s1__button s2__button');

    const result3 = c('button', { [c('is-disabled')]: true });
    expect(result3).toBe(
      's1__button s2__button s1__is-disabled s2__is-disabled',
    );

    const result4 = c('button', { [c('is-disabled')]: false });
    expect(result4).toBe('s1__button s2__button');
  });
});

describe('stylesCombine', () => {
  it('Should combine classNames with the same name', () => {
    const styles1 = { p: 'p1' };
    const styles2 = { p: 'p2' };
    const result = stylesCombine(styles1, styles2);
    expect(result).toEqual({ p: 'p1 p2' });
  });

  it('Should combine classNames even though it only exist in one styles', () => {
    const styles1 = { a: 'a1' };
    const styles2 = { p: 'p2' };
    const result = stylesCombine(styles1, styles2);
    expect(result).toEqual({ a: 'a1', p: 'p2' });
  });
});
