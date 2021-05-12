// import React, { forwardRef, RefObject } from 'react';
// import styles from './modal.module.scss';

// export interface ModalProps {
//   ref: RefObject<HTMLElement | null>;
//   refBox: RefObject<HTMLElement | null>;
//   onClose: () => void;
// }

// export interface ModalRefType {
//   ref: RefObject<HTMLElement | null>;
//   refBox: RefObject<HTMLElement | null>;
// }

// const Modal = forwardRef<React.RefObject<ModalRefType>, ModalProps>(
//   ({ onClose }, innerRef) => {
//     // const { ref, refBox } = innerRef;
//     const ref = innerRef;
//     return (
//       <div className={styles.modal} ref={ref}>
//         <div className={styles.modal__overlay}>
//           {/* <div className={styles.modal__box} ref={refBox}>
//             <h3 className={styles.modal__title}>Example Modal</h3>
//             <button onClick={onClose}>Agree</button>
//           </div> */}
//         </div>
//       </div>
//     );
//   }
// );

// export interface OverlayProps {
//   as: string | HTMLElement | React.ElementType;
// }

// // const Overlay: React.FC<OverlayProps> = ({ as }) => {
// //   const Element;
// // };

// export default Modal;

import React from 'react';

const Modal = () => {
  return <div></div>;
};

export default Modal;
