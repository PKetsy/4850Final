import React, { useState } from 'react';
import menuStore from '../../stores/menuStore';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

import './UpdateItems.css';

export default function UpdateItems() {
  const store = menuStore();

  const [show, setShow] = useState(true);
  const handleClose = () => setShow(false);

  if (!store.updateMenuForm._id) return <></>;

  return (
    <div style={{ width: '90%', textAlign: 'center', margin: '0 auto' }}>
      <h1 style={{ textAlign: 'center' }}> Update an Item</h1>

      <Modal show={show} onHide={handleClose} className="update-item-modal">
        <Form onSubmit={store.updateItem}>
          <Modal.Header closeButton>
            <Modal.Title>Update this Item</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Label>Category</Form.Label>
            <Form.Control
              name="category"
              as="select"
              value={store.updateMenuForm.category}
              onChange={store.handleUpdateFieldChange}
              required
            >
              <option value="">-- Please Select --</option>
              <option value="Popular">Popular</option>
              <option value="Sales">Sales</option>
              <option value="Fruits">Fruits</option>
              <option value="Vegetables">Vegetables</option>
              <option value="Seafood">Seafood</option>
              <option value="Kenricks">Kenricks</option>
              <option value="Beverages">Beverages</option>
              <option value="Misc">Misc</option>
            </Form.Control>

            <Form.Control
              name="title"
              value={store.updateMenuForm.title}
              onChange={store.handleUpdateFieldChange}
              placeholder="Title"
              style={{ marginBottom: '1rem' }}
              autoComplete="off"
            />
            <Form.Control
              name="description"
              placeholder="Description"
              value={store.updateMenuForm.description}
              onChange={store.handleUpdateFieldChange}
              style={{ marginBottom: '2rem' }}
              autoComplete="off"
            />
            <Form.Label>Price</Form.Label>
            <Form.Control
              name="price"
              type="number"
              value={store.updateMenuForm.price}
              onChange={store.handleUpdateFieldChange}
              min="0"
              step="0.01"
              required
            />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" type="submit">
              Save Changes
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </div>
  );
}
