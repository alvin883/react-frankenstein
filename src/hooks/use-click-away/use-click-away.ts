import { RefObject, useEffect } from 'react';
import onListener from 'src/utils/onListener';
import offListener from 'src/utils/offListener';

const useClickAway = (
  ref: RefObject<HTMLElement | null | unknown> | null | undefined,
  onClickAway: (e: Event) => void,
  events: (keyof DocumentEventMap)[] = ['mousedown', 'touchstart'],
) => {
  useEffect(() => {
    if (!ref || !ref.current) return;

    const handler = (event: Event) => {
      const el = ref.current as HTMLElement;

      // `event.target as Node` reference:
      // https://stackoverflow.com/a/61164277/6049731
      if (el && !el.contains(event.target as Node)) onClickAway(event);
    };
    events.forEach((e) => onListener(document, e, handler));
    return () => {
      events.forEach((e) => offListener(document, e, handler));
    };
  }, [events, ref]);
};

export default useClickAway;
