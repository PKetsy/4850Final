import React, { useState } from 'react';

import { Modal, Button } from '@mui/material';
import Form from 'react-bootstrap/Form';

const AdminMenuUpdateModal = (props) => {
  const { selectedItem, onUpdate, ...modalProps } = props;

  const [formValues, setFormValues] = useState(selectedItem);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdate(formValues);
    modalProps.onHide();
  };

  return (
    <Modal {...modalProps}>
      <Modal.Header closeButton>
        <Modal.Title>Edit Item</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="categorySelect">
            <Form.Label>Category</Form.Label>
            <Form.Control
              name="category"
              as="select"
              value={formValues.category}
              onChange={handleInputChange}
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
              <option value="Seasonal Items">Seasonal Items</option>
              <option value="Flowers">Flowers</option>
              <option value="Fresh Cut Kitchen Items">
                Fresh Cut Kitchen Items
              </option>
            </Form.Control>
          </Form.Group>

          <Form.Group>
            <Form.Label>Item Name</Form.Label>
            <Form.Control
              name="title"
              type="text"
              value={formValues.title}
              onChange={handleInputChange}
              required
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Description</Form.Label>
            <Form.Control
              name="description"
              as="textarea"
              value={formValues.description}
              onChange={handleInputChange}
              required
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Price</Form.Label>
            <Form.Control
              name="price"
              type="number"
              value={formValues.price}
              onChange={handleInputChange}
              required
              min="0"
            />
          </Form.Group>

          <Button type="submit">Update Item</Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default AdminMenuUpdateModal;
