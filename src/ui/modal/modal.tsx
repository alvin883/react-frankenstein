import * as React from 'react';
import clsx from 'clsx';
import { CSSTransition } from 'react-transition-group';

import styles from './modal.scss';
import { StandardComponentType } from '../../types';
import csstmap from '../../utils/csstmap';
import useKeyupEffect from '../../hooks/use-keyup-effect';

let DEFAULT_TAG: 'div' = 'div';

type ModalContextType = { isOpen: boolean; close: () => void } | null;
const ModalContext = React.createContext<ModalContextType>(null);
const useModalContext = () => {
  const context = React.useContext(ModalContext);
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
  onClose
}) => {
  const rootRef = React.useRef(null);

  useKeyupEffect(
    document,
    (e) => {
      if (e.key !== 'Escape') return;
      if (!isOpen) return;
      onClose();
    },
    [isOpen]
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

export default Modal;
