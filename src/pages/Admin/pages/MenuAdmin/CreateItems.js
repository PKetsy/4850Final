import React, { useEffect } from 'react';

import menuStore from '../../stores/menuStore';
import { Form, Button } from 'react-bootstrap';

export default function CreateItems() {
  const store = menuStore();

  return (
    <Form onSubmit={store.createMenuItem}>
      <Form.Group controlId="categorySelect">
        <Form.Label>Category</Form.Label>
        <Form.Control
          name="category"
          as="select"
          value={store.createMenuForm.category}
          onChange={store.updateCreateFormField}
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
      </Form.Group>

      <Form.Group>
        <Form.Label>Item Name</Form.Label>
        <Form.Control
          name="title"
          type="text"
          value={store.createMenuForm.title}
          onChange={store.updateCreateFormField}
          required
        />
      </Form.Group>

      <Form.Group>
        <Form.Label>Description</Form.Label>
        <Form.Control
          name="description"
          as="textarea"
          value={store.createMenuForm.description}
          onChange={store.updateCreateFormField}
          required
        />
      </Form.Group>

      <Form.Group controlId="priceInput">
        <Form.Label>Price</Form.Label>
        <Form.Control
          name="price"
          type="number"
          value={store.createMenuForm.price}
          onChange={store.updateCreateFormField}
          min="0"
          step="0.01"
          required
        />
      </Form.Group>

      <Button
        type="submit"
        style={{ padding: '20px', display: 'block', margin: '25px auto' }}
      >
        Create Item
      </Button>
    </Form>
  );
}
