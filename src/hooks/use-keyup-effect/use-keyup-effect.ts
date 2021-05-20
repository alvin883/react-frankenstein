import { useEffect } from 'react';

const useKeyupEffect = (
  ref: HTMLElement | Window | Document,
  callback: (e: KeyboardEvent) => any,
  deps: React.DependencyList = []
) => {
  const handler = (e: KeyboardEvent) => callback(e);
  useEffect(() => {
    ref.addEventListener('keyup', handler as any);
    return () => ref.removeEventListener('keyup', handler as any);
  }, deps);
};

export default useKeyupEffect;
