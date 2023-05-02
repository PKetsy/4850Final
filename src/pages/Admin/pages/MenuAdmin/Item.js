import React, { useState } from 'react';
import menuStore from '../../stores/menuStore';
import Modal from 'react-bootstrap/Modal';
import { Card, Button } from 'react-bootstrap';

export default function Item({ item }) {
  const [showConfirmModal, setShowConfirmModal] = useState(false);

  const store = menuStore((store) => {
    return { toggleUpdate: store.toggleUpdate, deleteItem: store.deleteItem };
  });

  return (
    <Card key={item._id} border="dark" bg="light">
      <Card.Header>
        <div className="text-center" key={item._id}>
          <Card.Title className="title-xl" key={item._id}>
            {item.title}
          </Card.Title>
          <Card.Subtitle>{item.category}</Card.Subtitle>
        </div>
      </Card.Header>
      <Card.Body className="card bg-light">
        <div
          key={item._id}
          className="d-flex justify-content-center align-items-center flex-column"
        >
          <hr />
          <h5 className="text-center">{item.description}</h5>
          <hr />
          <h1 className="text-center">
            <u>{item.price}</u>
          </h1>

          <hr />
          <div className="d-flex justify-content-between">
            <Button
              variant="primary"
              onClick={() => store.toggleUpdate(item)}
              style={{ marginRight: '15px' }}
            >
              Update item
            </Button>
            <Button
              variant="danger"
              onClick={() => setShowConfirmModal(true)}
              style={{ marginLeftt: '15px' }}
            >
              Delete item
            </Button>
          </div>
        </div>
      </Card.Body>

      <Modal
        show={showConfirmModal}
        onHide={() => setShowConfirmModal(false)}
        className="delete-modal"
      >
        <Modal.Header closeButton>
          <Modal.Title>Confirm deletion</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure you want to delete the item "{item.title}"?
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={() => setShowConfirmModal(false)}
          >
            Cancel
          </Button>
          <Button variant="danger" onClick={() => store.deleteItem(item._id)}>
            Confirm Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </Card>
  );
}
