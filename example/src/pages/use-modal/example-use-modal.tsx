import { useRef, useState } from 'react';
import { Modal, Button, useModal } from 'react-frankenstein';
import Heading from '../../components/heading';

const Basic = () => {
  const [isOpen, setIsOpen] = useState(false);
  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);
  return (
    <>
      <Button onClick={open}>Open</Button>
      <Modal isOpen={isOpen} close={close} /* withPortal */>
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
      <Modal {...modalState}>
        <Modal.Overlay />
        <Modal.Box>
          Basic
          {/* <div ref={initFocusRef}>not</div> */}
          <button>not this</button>
          <button ref={initFocusRef}>shit</button>
          <button>damn</button>
        </Modal.Box>
      </Modal>
    </>
  );
};

export default ExampleUseModal;
