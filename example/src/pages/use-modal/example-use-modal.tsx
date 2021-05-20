import { useRef, useState } from 'react';
import { Modal, useModal, NewModal } from 'react-frankenstein';
import Button from '../../components/button';
import Heading from '../../components/heading';

const Basic = () => {
  const [isOpen, setIsOpen] = useState(false);
  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);
  return (
    <>
      <Button onClick={open}>Open</Button>
      <Modal isOpen={isOpen} onClose={close} /* withPortal */>
        <Modal.Overlay />
        <Modal.Box>
          <Modal.Title as={Heading} asProps={{ size: 'h4' }}>
            Basic Box
          </Modal.Title>
          <Button onClick={close}>Close</Button>
        </Modal.Box>
      </Modal>
    </>
  );
};

const ExampleUseModal = () => {
  const initFocusRef = useRef<HTMLButtonElement | null>(null);
  // const initFocusRef = useRef<HTMLDivElement | null>(null);
  const modalState = useModal();
  return (
    <>
      <button onClick={modalState.open}>open NewModal</button>
      <Basic />
      <NewModal {...modalState}>
        <NewModal.Overlay />
        <NewModal.Box>
          Basic
          {/* <div ref={initFocusRef}>not</div> */}
          <button>not this</button>
          <button ref={initFocusRef}>shit</button>
          <button>damn</button>
        </NewModal.Box>
      </NewModal>
    </>
  );
};

export default ExampleUseModal;
