import React, { useState, useEffect } from 'react';
import rsvpStore from '../../Admin/stores/rsvpStore';

import { Form, Button } from 'react-bootstrap';
import { ListGroup, Badge } from 'react-bootstrap';

import Stack from '@mui/joy/Stack';
import Item from '@mui/joy/Stack';
import TextField from '@mui/material/TextField';
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';
import RemoveCircleOutlineRoundedIcon from '@mui/icons-material/RemoveCircleOutlineRounded';

const CustomerRsvpForm = ({ eventItems, event }) => {
  const store = rsvpStore();

  const [totalPrice, setTotalPrice] = useState(0);
  const [quantityReserved, setQuantityReserved] = useState(0);

  useEffect(() => {
    calculateTotalPrice();
  }, [quantityReserved]);

  const calculateTotalPrice = () => {
    let totalPrice = 0;
    eventItems.forEach((item) => {
      totalPrice += item.itemPrice * (quantityReserved[item.itemName] || 0);
    });
    setTotalPrice(totalPrice);
  };

  useEffect(() => {
    setQuantityReserved({});
  }, []);

  const handleIncrement = (itemId) => {
    setQuantityReserved((prevItemQuantities) => ({
      ...prevItemQuantities,
      [itemId]: (prevItemQuantities[itemId] || 0) + 1,
    }));
  };

  const handleDecrement = (itemId) => {
    setQuantityReserved((prevItemQuantities) => {
      const newQuantity = (prevItemQuantities[itemId] || 0) - 1;
      if (newQuantity < 0) {
        return prevItemQuantities;
      }
      return {
        ...prevItemQuantities,
        [itemId]: newQuantity,
      };
    });
  };

  const createRsvp = async (e) => {
    e.preventDefault();

    const rsvpData = {
      eventTitle: event.title,
      firstName: store.createRsvpForm.firstName,
      lastName: store.createRsvpForm.lastName,
      email: store.createRsvpForm.email,
      phoneNumber: store.createRsvpForm.phoneNumber,
      totalPrice: calculateTotalPrice(),
      eventItems: eventItems.map((item) => ({
        itemName: item.itemName,
        itemPrice: item.itemPrice,
        quantityReserved: quantityReserved[item.itemName] || 0,
      })),
    };
    try {
      const response = await fetch('/events', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(rsvpData),
        // Add line of code to clear the form after user submits
      });
      if (!response.ok) {
        throw new Error('Failed to create RSVP');
      }
    } catch (error) {
      console.error(error);
    }
    // Reload the page
    window.location.reload();
  };

  return (
    <Form onSubmit={createRsvp} style={{ maxHeight: 'calc(100vh - 210px)' }}>
      <Form.Group key={event._id}>
        <h2>{event.title}</h2>
        <Form.Control type="hidden" name="eventTitle" value={event.title} />

        <div className="row">
          <div className="col">
            <Form.Control
              name="firstName"
              value={store.createRsvpForm.firstName}
              onChange={store.updateRsvpField}
              placeholder="First Name"
              style={{ marginBottom: '1rem' }}
              autoComplete="off"
            />
          </div>
          <div className="col">
            <Form.Control
              name="lastName"
              value={store.createRsvpForm.lastName}
              onChange={store.updateRsvpField}
              placeholder="Last Name"
              style={{ marginBottom: '1rem' }}
              autoComplete="off"
            />
          </div>
        </div>
        <Form.Control
          name="email"
          type="email"
          value={store.createRsvpForm.email}
          onChange={store.updateRsvpField}
          placeholder="Email"
          style={{ marginBottom: '1rem' }}
          autoComplete="off"
        />

        <Form.Control
          name="phoneNumber"
          type="number"
          value={store.createRsvpForm.phoneNumber}
          onChange={store.updateRsvpField}
          placeholder="Phone number"
          style={{ marginBottom: '1rem' }}
          autoComplete="off"
        />
        <hr />
        <h3 style={{ textAlign: 'center' }}> Items for this Event:</h3>
        <ListGroup>
          {eventItems.map((item) => (
            <ListGroup.Item
              key={item._id}
              className="d-flex justify-content-between align-items-center"
            >
              {item.itemName}
              <Badge bg="success">${item.itemPrice}</Badge>
            </ListGroup.Item>
          ))}
        </ListGroup>
        <hr />

        {eventItems.map((item) => (
          <div key={item._id}>
            <Stack direction="row" alignItems="center">
              <Item>
                <input
                  className="form-control"
                  type="text"
                  name={item.itemName}
                  value={store.createRsvpForm[item.itemName]}
                  placeholder={`${item.itemName}`}
                  autoComplete="off"
                  readOnly
                  spacing={6}
                />
              </Item>
              <TextField
                variant="outlined"
                placeholder="Quantiy Reserved"
                size="small"
                type="number"
                value={quantityReserved[item.itemName] || ''}
                style={{ textAlign: 'center' }}
                spacing={4}
                onChange={(e) => {
                  const value = parseInt(e.target.value);
                  if (isNaN(value) || value < 0 || value > 100) {
                    setQuantityReserved((prevItemQuantities) => ({
                      ...prevItemQuantities,
                      [item.itemName]: 0,
                    }));
                  } else {
                    setQuantityReserved((prevItemQuantities) => ({
                      ...prevItemQuantities,
                      [item.itemName]: value,
                    }));
                  }
                }}
              />
              <Item direction="row" alignItems="center" spacing={2}>
                <AddCircleOutlineRoundedIcon
                  style={{ fontSize: 30 }}
                  onClick={() => handleIncrement(item.itemName)}
                />

                <RemoveCircleOutlineRoundedIcon
                  style={{ fontSize: 30 }}
                  onClick={() => handleDecrement(item.itemName)}
                />
              </Item>
            </Stack>
            <br />
            <br />
          </div>
        ))}
      </Form.Group>
      <h3>Order Total: ${totalPrice.toFixed(2)}</h3>
      <Button type="submit">Submit RSVP</Button>
    </Form>
  );
};

export default CustomerRsvpForm;
