import { MutableRefObject, useEffect, useRef } from 'react';
import {
  focus,
  focusIn,
  FocusResult,
  FocusStrategy,
} from 'src/utils/focus-management';
import isBrowser from 'src/utils/is-browser';
import useWindowEvent from 'src/hooks/use-window-event';

enum Features {
  /** No features enabled for the `useFocusTrap` hook. */
  None = 1 << 0,

  /** Ensure that we move focus initially into the container. */
  InitialFocus = 1 << 1,

  /** Ensure that pressing `Tab` and `Shift+Tab` is trapped within the container. */
  TabLock = 1 << 2,

  /** Ensure that programmatically moving focus outside of the container is disallowed. */
  FocusLock = 1 << 3,

  /** Ensure that we restore the focus when unmounting the component that uses this `useFocusTrap` hook. */
  RestoreFocus = 1 << 4,

  /** Enable all features. */
  All = InitialFocus | TabLock | FocusLock | RestoreFocus,
}

const useRestoreFocus = (shouldRestore: boolean) => {
  let restoreElement = useRef<HTMLElement | null>(
    isBrowser ? (document.activeElement as HTMLElement) : null,
  );
  useEffect(() => {
    if (!shouldRestore) return;
    restoreElement.current = document.activeElement as HTMLElement;

    return () => {
      focus(restoreElement.current);
      restoreElement.current = null;
    };
  }, [shouldRestore]);
  return { restoreElement: restoreElement.current };
};

const useInitialFocus = (
  containerRef: MutableRefObject<HTMLElement | null>,
  initialFocusRef: MutableRefObject<HTMLElement | null> | undefined,
  onChangeActiveElement: (element: HTMLElement) => void,
  shouldInitialFocus: boolean = false,
) => {
  useEffect(() => {
    if (!shouldInitialFocus) return;
    if (!containerRef.current) return;
    if (!isBrowser) return;

    let activeElement = document.activeElement as HTMLElement;

    if (initialFocusRef?.current && initialFocusRef.current === activeElement) {
      onChangeActiveElement(activeElement);
      return;
    } else if (containerRef.current.contains(activeElement)) {
      onChangeActiveElement(activeElement);
      return;
    }

    if (initialFocusRef?.current) {
      focus(initialFocusRef.current);
    } else {
      focusIn(containerRef.current, FocusStrategy.First);
      // const result = focusIn(containerRef.current, FocusStrategy.First);
      // if (result === FocusResult.Error) {
      //   throw new Error(
      //     'There are no focusable elements inside the <FocusTrap />',
      //   );
      // }
    }

    onChangeActiveElement(activeElement);
  }, [containerRef, initialFocusRef, shouldInitialFocus]);
};

const useHandleTab = (
  containerRef: MutableRefObject<HTMLElement | null>,
  features: Features,
  onChangeActiveElement: (element: HTMLElement) => void,
) => {
  // Just a short alias
  const F = FocusStrategy;

  useWindowEvent('keydown', (event) => {
    if (!(features & Features.TabLock)) return;
    if (!containerRef.current) return;
    if (event.key !== 'Tab') return;

    event.preventDefault();

    const result = focusIn(
      containerRef.current,
      (event.shiftKey ? F.Previous : F.Next) | F.WrapAround,
    );

    if (result === FocusResult.Success) {
      onChangeActiveElement(document.activeElement as HTMLElement);
    }
  });
};

const useFocusTrap = (
  containerRef: MutableRefObject<HTMLElement | null>,
  features: Features = Features.All,
  {
    initialFocusRef,
  }: // containers,
  {
    initialFocusRef?: MutableRefObject<HTMLElement | null>;
    // containers?: MutableRefObject<Set<MutableRefObject<HTMLElement | null>>>;
  } = {},
) => {
  let isFeatureRestoreFocus = Boolean(features & Features.RestoreFocus);
  let isFeatureInitialFocus = Boolean(features & Features.InitialFocus);
  let previousActiveElement = useRef<HTMLElement | null>(null);
  const onChangeActiveElement = (el: HTMLElement) =>
    (previousActiveElement.current = el);

  useRestoreFocus(isFeatureRestoreFocus);

  useInitialFocus(
    containerRef,
    initialFocusRef,
    onChangeActiveElement,
    isFeatureInitialFocus,
  );

  useHandleTab(containerRef, features, onChangeActiveElement);

  return {};
};

export { useFocusTrap, Features as FocusTrapFeatures };
export default useFocusTrap;
