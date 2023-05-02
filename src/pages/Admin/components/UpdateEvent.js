import React, { useState } from 'react';
import eventsStore from '../stores/eventsStore';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import DatePicker from 'react-datepicker';
import { Col } from 'react-bootstrap';

import './UpdateEvent.css';
import 'react-datepicker/dist/react-datepicker.css';

function DatePickerFormControl(props) {
  return (
    <Form.Group as={Col}>
      <Form.Label>{props.label}</Form.Label>
      <DatePicker
        name={props.name}
        value={props.value}
        placeholderText={props.placeholderText}
        onChange={(date) => props.onChange(date, props.name)}
        dateFormat="MM/dd/yyyy"
        selected={props.value ? new Date(props.value) : null}
        autoComplete="off"
      />
    </Form.Group>
  );
}

export default function UpdateForm() {
  const store = eventsStore();

  const [show, setShow] = useState(true);
  const handleClose = () => setShow(false);

  if (!store.updateForm._id) return <></>;

  return (
    <div style={{ width: '90%', textAlign: 'center', margin: '0 auto' }}>
      <h1 style={{ textAlign: 'center' }}> Update an Event</h1>

      <Modal show={show} onHide={handleClose} className="update-event-modal">
        <Form onSubmit={store.updateEvent}>
          <Modal.Header closeButton>
            <Modal.Title>Update this event</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Control
              name="title"
              value={store.updateForm.title}
              onChange={store.handleUpdateFieldChange}
              placeholder="Title"
              style={{ marginBottom: '1rem' }}
              autoComplete="off"
            />
            <DatePickerFormControl
              name="startDate"
              value={store.updateForm.startDate}
              onChange={store.handleUpdateDateChange}
              placeholderText="Start of Event"
              dateFormat="MM-dd-yyyy"
              style={{ marginBottom: '2rem' }}
              autoComplete="off"
            />

            <DatePickerFormControl
              name="endDate"
              value={store.updateForm.endDate}
              onChange={store.handleUpdateDateChange}
              placeholderText="End of Event"
              dateFormat="MM-dd-yyyy"
              style={{ marginBottom: '2rem' }}
              autoComplete="off"
            />
            <Form.Control
              name="description"
              placeholder="Description"
              value={store.updateForm.description}
              onChange={store.handleUpdateFieldChange}
              style={{ marginBottom: '2rem' }}
              autoComplete="off"
            />
            {store.updateForm.eventItems.map((item, index) => (
              <div key={index}>
                <Form.Control
                  name={'itemName'}
                  value={store.updateForm.eventItems[index].itemName}
                  placeholder="Item Name"
                  onChange={(e) => {
                    store.handleInputChange(e, index, 'updateForm');
                  }}
                  style={{ marginBottom: '1rem' }}
                  autoComplete="off"
                />
                <Form.Control
                  name={'itemPrice'}
                  value={store.updateForm.eventItems[index].itemPrice}
                  placeholder="Item Price"
                  onChange={(e) => {
                    store.handleInputChange(e, index, 'updateForm');
                  }}
                  style={{ marginBottom: '1rem' }}
                  autoComplete="off"
                />
              </div>
            ))}
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
