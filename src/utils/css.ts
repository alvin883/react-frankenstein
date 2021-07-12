export type MapCSSTransitionKeys =
  | 'appear'
  | 'appearActive'
  | 'appearDone'
  | 'enter'
  | 'enterActive'
  | 'enterDone'
  | 'exit'
  | 'exitActive'
  | 'exitDone';

/**
 * Mapping CSS Transition classNames into our styles CSS Modules object
 * @param s the styles object
 * @param prefix the prefix for every event name
 */
export const mapCssTransition = (s: object, prefix = 'is-') => ({
  appear: s ? s[`${prefix}appear`] : `${prefix}appear`,
  appearActive: s ? s[`${prefix}appear-active`] : `${prefix}appear-active`,
  appearDone: s ? s[`${prefix}appear-done`] : `${prefix}appear-done`,
  enter: s ? s[`${prefix}enter`] : `${prefix}enter`,
  enterActive: s ? s[`${prefix}enter-active`] : `${prefix}enter-active`,
  enterDone: s ? s[`${prefix}enter-done`] : `${prefix}enter-done`,
  exit: s ? s[`${prefix}exit`] : `${prefix}exit`,
  exitActive: s ? s[`${prefix}exit-active`] : `${prefix}exit-active`,
  exitDone: s ? s[`${prefix}exit-done`] : `${prefix}exit-done`,
});
