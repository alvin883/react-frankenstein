import { useEffect } from 'react';

const useKeyupEffect = (
  ref: HTMLElement | Window | Document,
  callback: (e: KeyboardEvent) => any,
  deps: React.DependencyList = []
) => {
  const handler = (e: KeyboardEvent) => callback(e);
  useEffect(() => {
    ref.addEventListener('keyup', handler);
    return () => ref.removeEventListener('keyup', handler);
  }, deps);
};

export default useKeyupEffect;
