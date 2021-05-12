import {
  /* forwardRef, RefObject, */ useCallback,
  useEffect,
  useState
} from 'react';
import useClickAway from '../use-click-away';
import useKeyupEffect from '../use-keyup-effect';

export type useModalArgumentsType = {
  isOpen?: boolean;
  onClose?: () => void;
  onOpen?: () => void;
  controlled?: boolean;
  closeOnClickOutside?: boolean;
  ref?: Parameters<typeof useClickAway>[0];
};

export type useModalReturnType = {
  isOpen: boolean;
  close: () => void;
  open: () => void;
};

export type useModalType = (
  props?: useModalArgumentsType
) => useModalReturnType;

// const useModalRef = forwardRef<
//   Parameters<typeof useClickAway>[0],
//   useModalArgumentsType
// >((props, ref) => {
//   return useModal({ ...props, ref: ref });
// });

const useModal: useModalType = (
  props = {
    isOpen: false,
    onClose: () => {},
    ref: undefined,
    closeOnClickOutside: false,
    controlled: false
  }
) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const closePopup = () => {
    if (!props.controlled && !isOpen) return;
    if (props.controlled && !props.isOpen) return;
    if (!props.controlled) setIsOpen(false);
    props.onClose?.();
  };

  const close = useCallback(() => {
    closePopup();
  }, [isOpen, props.isOpen]);

  const open = () => {
    if (!props.controlled) setIsOpen(true);
    setIsOpen(true);
  };

  useClickAway(props.ref, close);
  useKeyupEffect(
    document,
    (e) => {
      // console.log({ e: e.key });
      if (!props.controlled && !isOpen) return false;
      if (props.controlled && !props.isOpen) return false;
      if (e.key !== 'Escape') return false;
      // console.log('executed');
      closePopup();
      return true;
    },
    [props]
  );

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };

    document.addEventListener('keypress', handler);
    return () => document.removeEventListener('keypress', handler);
  }, []);

  return {
    isOpen: props.controlled ? props.isOpen || false : isOpen,
    close,
    open
  };
};

export default useModal;
