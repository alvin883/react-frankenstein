import { useRef } from 'react';

type UseIsFirstMountType = () => boolean;

const useIsFirstMount: UseIsFirstMountType = () => {
  const isFirst = useRef(true);

  if (isFirst.current) {
    isFirst.current = false;
    return true;
  }

  return isFirst.current;
};

export { useIsFirstMount };
export default useIsFirstMount;
