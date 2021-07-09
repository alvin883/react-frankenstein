import { createContext, MutableRefObject, useContext, useRef } from 'react';
import clsx from 'clsx';
import { CSSTransition } from 'react-transition-group';

import styles from './modal.module.scss';
import { StandardComponentType } from '../../types';
import csstmap from '../../utils/csstmap';
import { useModalReturnType } from '../../hooks/use-modal/use-modal';
import useFocusTrap, {
  Features as FocusTrapFeatures,
} from '../../hooks/use-focus-trap/use-focus-trap';

let DEFAULT_TAG: 'div' = 'div';

export type ModalProps = Partial<useModalReturnType> & {
  unmountOnExit?: boolean;
  timeout?: number;
  initialFocusRef?: MutableRefObject<HTMLElement | null>;
};

export const Modal: StandardComponentType<typeof DEFAULT_TAG, ModalProps> & {
  Overlay: typeof Overlay;
  Box: typeof Box;
  Title: typeof Title;
} = (props) => {
  const {
    as: Tag = DEFAULT_TAG,
    isOpen = false,
    unmountOnExit = true,
    timeout = 275,
    initialFocusRef,
    close = () => {},
  } = props;
  const rootRef = useRef(null);
  const focusTrapFeatures = isOpen
    ? FocusTrapFeatures.All
    : FocusTrapFeatures.None;

  console.log({ focusTrapFeatures });
  useFocusTrap(rootRef, focusTrapFeatures, { initialFocusRef });

  return (
    <ModalContext.Provider value={{ isOpen: isOpen, close: close }}>
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
