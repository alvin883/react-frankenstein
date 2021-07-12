import { createContext, MutableRefObject, useContext, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';

import styles from './modal.module.scss';
import { ExtendProps, StandardComponentType } from 'src/types';
import { mapCssTransition, MapCSSTransitionKeys } from 'src/utils/css';
import { useModalReturnType } from 'src/hooks/use-modal';
import { useFocusTrap, FocusTrapFeatures } from 'src/hooks/use-focus-trap';
import { stylesCombinerFn } from 'src/utils/styles-combiner';

let DEFAULT_TAG: 'div' = 'div';

type ModalProps = Partial<useModalReturnType> & {
  unmountOnExit?: boolean;
  timeout?: number;
  initialFocusRef?: MutableRefObject<HTMLElement | null>;
  classNames?: {
    modal?: string;
  } & {
    [key in MapCSSTransitionKeys as `is-${key}`]?: string;
  };
};

type ExtendModalProps<Props> = StandardComponentType<
  typeof DEFAULT_TAG,
  ExtendProps<ModalProps, Props>
>;

const Modal: StandardComponentType<typeof DEFAULT_TAG, ModalProps> & {
  Overlay: typeof Overlay;
  Box: typeof Box;
  Title: typeof Title;
} = (props) => {
  const {
    as: Tag = DEFAULT_TAG,
    removeDefault,
    className,
    classNames = {},
    isOpen = false,
    unmountOnExit = true,
    timeout = 275,
    initialFocusRef,
    close = () => {},
  } = props;

  const c = stylesCombinerFn(removeDefault ? {} : styles, classNames);

  const rootRef = useRef(null);
  const focusTrapFeatures = isOpen
    ? FocusTrapFeatures.All
    : FocusTrapFeatures.None;

  useFocusTrap(rootRef, focusTrapFeatures, { initialFocusRef });

  return (
    <ModalContext.Provider value={{ isOpen: isOpen, close: close }}>
      <CSSTransition
        nodeRef={rootRef}
        classNames={mapCssTransition(c.value)}
        in={isOpen}
        timeout={timeout}
        unmountOnExit={unmountOnExit}
      >
        <Tag
          {...props.asProps}
          {...props.attributes}
          className={c('modal', className)}
          ref={rootRef}
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
type OverlayType = StandardComponentType<typeof DEFAULT_TAG, {}>;

const Overlay: OverlayType = ({
  as: Tag = DEFAULT_TAG,
  asProps,
  children,
  removeDefault,
  className,
  ...props
}) => {
  const c = stylesCombinerFn(removeDefault ? {} : styles, {});
  const context = useModalContext();
  const onClick = () => (context?.isOpen ? context.close() : null);
  return (
    <Tag
      {...props}
      {...asProps}
      className={c('overlay', className)}
      onClick={onClick}
    >
      {children}
    </Tag>
  );
};

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
  const c = stylesCombinerFn(removeDefault ? {} : styles, {});
  return (
    <Tag {...props} {...asProps} className={c('box', className)}>
      {children}
    </Tag>
  );
};

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
  const c = stylesCombinerFn(removeDefault ? {} : styles, {});
  return (
    <Tag {...props} {...asProps} className={c('title', className)}>
      {children}
    </Tag>
  );
};

Modal.Overlay = Overlay;
Modal.Box = Box;
Modal.Title = Title;

export type { ModalProps, ExtendModalProps };
export { Modal };
