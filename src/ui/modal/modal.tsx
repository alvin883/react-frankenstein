import React, {
  createContext,
  MutableRefObject,
  useContext,
  useRef,
} from 'react';
import clsx from 'clsx';
import { CSSTransition } from 'react-transition-group';

import styles from './modal.module.scss';
import { StandardComponentType } from '../../types';
import csstmap from '../../utils/csstmap';
import useKeyupEffect from '../../hooks/use-keyup-effect';
import { useModalReturnType } from '../../hooks/use-modal/use-modal';
import useFocusTrap, {
  Features as FocusTrapFeatures,
} from '../../hooks/use-focus-trap/use-focus-trap';

let DEFAULT_TAG: 'div' = 'div';

export type NewModalProps = useModalReturnType & {
  unmountOnExit?: boolean;
  timeout?: number;
  initialFocusRef?: MutableRefObject<HTMLElement | null>;
};

const NewModal: StandardComponentType<typeof DEFAULT_TAG, NewModalProps> & {
  Overlay: typeof Overlay;
  Box: typeof Box;
} = (props) => {
  const {
    as: Tag = DEFAULT_TAG,
    isOpen = false,
    unmountOnExit = true,
    timeout = 275,
    initialFocusRef,
  } = props;
  const rootRef = useRef(null);
  const focusTrapFeatures = isOpen
    ? FocusTrapFeatures.All
    : FocusTrapFeatures.None;

  console.log({ focusTrapFeatures });
  useFocusTrap(rootRef, focusTrapFeatures, { initialFocusRef });

  return (
    <ModalContext.Provider value={{ isOpen: isOpen, close: props.close }}>
      <CSSTransition
        nodeRef={rootRef}
        classNames={csstmap(styles)}
        in={isOpen}
        timeout={timeout}
        unmountOnExit={unmountOnExit}
      >
        <Tag
          {...props.asProps}
          className={clsx(
            !props.removeDefault && styles.modal,
            props.className,
          )}
          ref={rootRef}
          {...props.attributes}
        >
          {props.children}
        </Tag>
      </CSSTransition>
    </ModalContext.Provider>
  );
};

type ModalContextType = { isOpen: boolean; close: () => void } | null;
const ModalContext = createContext<ModalContextType>(null);
const useModalContext = () => {
  const context = useContext(ModalContext);
  return context;
};

export type ModalProps = {
  isOpen: boolean;
  timeout?: number;
  unmountOnExit?: boolean;
  onClose: () => void;
};

const Modal: StandardComponentType<typeof DEFAULT_TAG, ModalProps> & {
  Overlay: typeof Overlay;
  Box: typeof Box;
  Title: typeof Title;
} = ({
  as: Tag = DEFAULT_TAG,
  asProps,
  children,
  removeDefault,
  isOpen,
  timeout = 275,
  unmountOnExit = true,
  className,
  onClose,
}) => {
  const rootRef = useRef(null);

  useKeyupEffect(
    document,
    (e) => {
      if (e.key !== 'Escape') return;
      if (!isOpen) return;
      onClose();
    },
    [isOpen],
  );

  return (
    <ModalContext.Provider value={{ isOpen, close: onClose }}>
      <CSSTransition
        nodeRef={rootRef}
        classNames={csstmap(styles)}
        in={isOpen}
        timeout={timeout}
        unmountOnExit={unmountOnExit}
      >
        <Tag
          {...asProps}
          className={clsx(!removeDefault && styles.modal, className)}
          ref={rootRef}
        >
          {children}
        </Tag>
      </CSSTransition>
    </ModalContext.Provider>
  );
};

// ----------------------------------------------------------------------------
// Overlay
// ----------------------------------------------------------------------------
type OverlayType = StandardComponentType<typeof DEFAULT_TAG, {}> & {
  styles: string;
};

const Overlay: OverlayType = ({
  as: Tag = DEFAULT_TAG,
  asProps,
  children,
  removeDefault,
  className,
  ...props
}) => {
  const context = useModalContext();
  const onClick = () => {
    if (context?.isOpen) context.close();
  };
  return (
    <Tag
      {...props}
      {...asProps}
      className={clsx(!removeDefault && styles.overlay, className)}
      onClick={onClick}
    >
      {children}
    </Tag>
  );
};
Overlay.styles = styles.overlay;

// ----------------------------------------------------------------------------
// Box
// ----------------------------------------------------------------------------
type BoxType = OverlayType;

const Box: BoxType = ({
  as: Tag = DEFAULT_TAG,
  asProps,
  children,
  removeDefault,
  className,
  ...props
}) => {
  return (
    <Tag
      {...props}
      {...asProps}
      className={clsx(!removeDefault && styles.box, className)}
    >
      {children}
    </Tag>
  );
};
Box.styles = styles.box;

// ----------------------------------------------------------------------------
// Title
// ----------------------------------------------------------------------------
type TitleType = OverlayType;

const Title: TitleType = ({
  as: Tag = DEFAULT_TAG,
  asProps,
  children,
  removeDefault,
  className,
  ...props
}) => {
  return (
    <Tag
      {...props}
      {...asProps}
      className={clsx(!removeDefault && styles.title, className)}
    >
      {children}
    </Tag>
  );
};
Title.styles = styles.title;

Modal.Overlay = Overlay;
Modal.Box = Box;
Modal.Title = Title;
NewModal.Overlay = Overlay;
NewModal.Box = Box;
export { NewModal };
export default Modal;
