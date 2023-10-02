import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
const CustomerForm = ({ isOpen, onClose, onSubmit }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [image, setImage] = useState(null);

  const handleSubmit = () => {
    onSubmit({ firstName, lastName, email, image });
    setFirstName('');
    setLastName('');
    setEmail('');
    setImage(null);
    onClose();
  };

  return (
    <Modal
      show={isOpen}
      onHide={() => onClose}
      backdrop='static'
      keyboard={false}
    >
      <Modal.Header closeButton>
        <Modal.Title>Modal title</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        I will not close if you click outside me. Don not even try to press
        escape key.
      </Modal.Body>
      <Modal.Footer>
        <Button variant='secondary' onClick={() => onClose}>
          Close
        </Button>
        <Button variant='primary'>Understood</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CustomerForm;
