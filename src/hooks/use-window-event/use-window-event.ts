import { useEffect, useRef } from 'react';

const useWindowEvent = <Type extends keyof WindowEventMap>(
  type: Type,
  listener: (this: Window, ev: WindowEventMap[Type]) => any,
  options?: boolean | AddEventListenerOptions,
) => {
  let listenerRef = useRef(listener);
  listenerRef.current = listener;

  useEffect(() => {
    function handler(event: WindowEventMap[Type]) {
      listenerRef.current.call(window, event);
    }

    window.addEventListener(type, handler, options);
    return () => window.removeEventListener(type, handler, options);
  }, [type, options]);
};

export default useWindowEvent;
