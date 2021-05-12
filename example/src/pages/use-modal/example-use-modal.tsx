import { useState } from 'react';
import { Modal } from 'react-frankenstein';
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
  return (
    <>
      <Basic />
    </>
  );
};

export default ExampleUseModal;
