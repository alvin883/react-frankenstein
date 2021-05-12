import React, { forwardRef, useImperativeHandle, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
// import { useModal } from 'react-frankenstein';

import styles from './modal.module.scss';

export interface ModalHandles {
  open: Function;
}

const ModalController = forwardRef<ModalHandles>((_, innerRef) => {
  const refTransition = useRef(null);
  const ref = useRef(null);
  // const state = useModal({ ref });
  const state = { open: () => null, isOpen: true, close: () => null };

  useImperativeHandle(innerRef, () => ({
    open: state.open
  }));

  return (
    <CSSTransition
      nodeRef={refTransition}
      in={state.isOpen}
      timeout={275}
      unmountOnExit={true}
    >
      <div className={styles.modal} ref={refTransition}>
        <div className={styles.modal__overlay}>
          <div className={styles.modal__box} ref={ref}>
            <h3 className={styles.modal__title}>Example Modal</h3>
            <button onClick={state.close}>Agree</button>
          </div>
        </div>
      </div>
    </CSSTransition>
  );
});

export default ModalController;
