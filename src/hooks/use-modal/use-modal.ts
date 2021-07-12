import { RefObject, useState } from 'react';

import useClickAway from 'src/hooks/use-click-away';
import useKeyupEffect from 'src/hooks/use-keyup-effect';

export type useModalArgumentsType = {
  initial: boolean;
  initialFocus?: RefObject<HTMLElement>;
  closeOnClickAway?: boolean;
  overlayRef?: Parameters<typeof useClickAway>[0];
};

export type useModalReturnType = {
  isOpen: boolean;
  close: () => void;
  open: () => void;
  attributes: object;
};

export type useModalType = (
  props?: useModalArgumentsType,
) => useModalReturnType;

const argsDefault: useModalArgumentsType = {
  initial: false,
};

const useModal: useModalType = ({
  initial,
  initialFocus,
  overlayRef,
  closeOnClickAway,
} = argsDefault) => {
  const [isOpen, setIsOpen] = useState<boolean>(initial);

  const close = () => {
    if (!isOpen) return;
    setIsOpen(false);
  };

  const open = () => {
    if (isOpen) return;
    setIsOpen(true);
    initialFocus?.current?.focus();
  };

  useClickAway(overlayRef, () => {
    if (!closeOnClickAway) return;
    close();
  });

  useKeyupEffect(
    document,
    (e) => {
      if (e.key !== 'Escape') return;
      close();
    },
    [isOpen],
  );

  return {
    isOpen,
    close,
    open,
    attributes: {
      role: 'dialog',
      'aria-modal': isOpen.toString(),
    },
  };
};

export { useModal };
export default useModal;
