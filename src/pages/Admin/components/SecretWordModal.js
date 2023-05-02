import { Modal, Button, Form } from 'react-bootstrap';
import { useState } from 'react';
import './SecretWordModal.css';

function SecretWordModal(props) {
  const [secretWord, setSecretWord] = useState('');

  function handleSecretWordChange(event) {
    setSecretWord(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (secretWord === props.correctSecretWord) {
      props.onCorrectSecretWord();
    } else {
      alert('Incorrect secret word!');
    }
  }

  return (
    <Modal
      show={props.show}
      onHide={props.onHide}
      className="secret-word-modal"
    >
      <Modal.Header closeButton>
        <Modal.Title>Aren't we sneaky? Nice try!!</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Secret word:</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter secret word"
              value={secretWord}
              onChange={handleSecretWordChange}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

export default SecretWordModal;
