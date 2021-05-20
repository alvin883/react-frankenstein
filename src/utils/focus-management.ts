export enum FocusStrategy {
  /** Focus the first non-disabled element */
  First = 1 << 0,

  /** Focus the previous non-disabled element */
  Previous = 1 << 1,

  /** Focus the next non-disabled element */
  Next = 1 << 2,

  /** Focus the last non-disabled element */
  Last = 1 << 3,

  /** Wrap tab around */
  WrapAround = 1 << 4,

  /** Prevent scrolling the focusable elements into view */
  NoScroll = 1 << 5,
}

export enum FocusResult {
  /** Something went wrong while trying to focus. */
  Error,

  /** When `Focus.WrapAround` is enabled, going from position `N` to `N+1` where `N` is the last index in the array, then we overflow. */
  Overflow,

  /** Focus was successful. */
  Success,

  /** When `Focus.WrapAround` is enabled, going from position `N` to `N-1` where `N` is the first index in the array, then we underflow. */
  Underflow,
}

enum Direction {
  Previous = -1,
  Next = 1,
}

// https://stackoverflow.com/a/30753870
let focusableSelector = [
  '[contentEditable=true]',
  '[tabindex]',
  'a[href]',
  'area[href]',
  'button:not([disabled])',
  'iframe',
  'input:not([disabled])',
  'select:not([disabled])',
  'textarea:not([disabled])',
]
  .map((selector) => `${selector}:not([tabindex='-1'])`)
  .join(',');

const getDirection = (strategy: FocusStrategy) => {
  // Just a short alias
  const F = FocusStrategy;

  if (strategy & (F.First | F.Next)) return Direction.Next;
  if (strategy & (F.Last | F.Previous)) return Direction.Previous;

  throw new Error('Missing FocusStrategy');
};

const getStartIndex = (
  elements: HTMLElement[],
  active: HTMLElement,
  strategy: FocusStrategy,
) => {
  // Just a short alias
  const F = FocusStrategy;

  if (strategy & F.First) return 0;
  if (strategy & F.Previous) return Math.max(0, elements.indexOf(active) - 1);
  if (strategy & F.Next) return Math.max(0, elements.indexOf(active) + 1);
  if (strategy & F.Last) return elements.length - 1;

  throw new Error('Missing FocusStrategy');
};

export function getFocusableElements(
  container: HTMLElement | null = document.body,
) {
  if (container == null) return [];
  return Array.from(container.querySelectorAll<HTMLElement>(focusableSelector));
}

export const focus = (element: HTMLElement | null) => {
  element?.focus({ preventScroll: true });
};

export const focusIn = (container: HTMLElement, strategy: FocusStrategy) => {
  // Just a short alias
  const F = FocusStrategy;

  const elements = getFocusableElements(container);
  const active = document.activeElement as HTMLElement;
  const direction = getDirection(strategy);
  const startIndex = getStartIndex(elements, active, strategy);
  const focusOptions = strategy & F.NoScroll ? { preventScroll: true } : {};

  let offset = 0;
  let total = elements.length;
  let next = undefined;
  do {
    // Guard against infinite loops
    if (offset >= total || offset + total <= 0) return FocusResult.Error;

    let nextIdx = startIndex + offset;

    if (strategy & F.WrapAround) {
      nextIdx = (nextIdx + total) % total;
    } else {
      if (nextIdx < 0) return FocusResult.Underflow;
      if (nextIdx >= total) return FocusResult.Overflow;
    }

    next = elements[nextIdx];

    // Try the focus the next element, might not work if it is "hidden" to the user.
    next?.focus(focusOptions);

    // Try the next one in line
    offset += direction;
  } while (next !== document.activeElement);

  // This is a little weird, but let me try and explain: There are a few scenario's
  // in chrome for example where a focused `<a>` tag does not get the default focus
  // styles and sometimes they do. This highly depends on whether you started by
  // clicking or by using your keyboard. When you programmatically add focus `anchor.focus()`
  // then the active element (document.activeElement) is this anchor, which is expected.
  // However in that case the default focus styles are not applied *unless* you
  // also add this tabindex.
  if (!next.hasAttribute('tabindex')) next.setAttribute('tabindex', '0');

  return FocusResult.Success;
};
