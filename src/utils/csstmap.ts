/**
 * Mapping CSS Transition classNames into our styles CSS Modules object
 * @param s the styles object
 */
const csstmap = (s: object) => ({
  appear: s ? s['is-appear'] : 'is-appear',
  appearActive: s ? s['is-appear-active'] : 'is-appear-active',
  appearDone: s ? s['is-appear-done'] : 'is-appear-done',
  enter: s ? s['is-enter'] : 'is-enter',
  enterActive: s ? s['is-enter-active'] : 'is-enter-active',
  enterDone: s ? s['is-enter-done'] : 'is-enter-done',
  exit: s ? s['is-exit'] : 'is-exit',
  exitActive: s ? s['is-exit-active'] : 'is-exit-active',
  exitDone: s ? s['is-exit-done'] : 'is-exit-done'
});

export default csstmap;
