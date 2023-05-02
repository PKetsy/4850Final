import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { Card, Button } from 'react-bootstrap';
import { FormGroup, FormControlLabel, Checkbox } from '@mui/material';
import moment from 'moment';

import CustomerRsvpForm from './CustomerRsvpForm';
import './CustomerEvents.css';

export default function CustomerEvents({ event: eventProp }) {
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const handleShowModal = () => setShowConfirmModal(true);
  const handleCloseModal = () => setShowConfirmModal(false);
  const [agreedToRules, setAgreedToRules] = useState(false);

  const handleCheckboxChange = (e) => {
    setAgreedToRules(e.target.checked);
  };

  return (
    <Card key={eventProp._id} border="dark" bg="light">
      <Card.Header>
        <div className="text-center" key={eventProp._id}>
          <Card.Title className="title-xl" key={eventProp._id}>
            {eventProp.title}
          </Card.Title>

          <Card.Subtitle className="mb-2 text-muted card-subtitle">
            {moment(eventProp.startDate).format('MM-DD-YYYY')} -{' '}
            {moment(eventProp.endDate).format('MM-DD-YYYY')}
          </Card.Subtitle>
        </div>
      </Card.Header>
      <Card.Body className="card bg-light">
        <div
          key={eventProp._id}
          className="d-flex justify-content-center align-items-center flex-column"
        >
          <hr />
          <h5 className="text-center">{eventProp.description}</h5>
          <hr />
          <h1 className="text-center">
            <u>Items Available</u>
          </h1>

          {eventProp.eventItems.map((item) => (
            <div key={item._id} className="mx-auto card-item-box text-center">
              <h4>{item.itemName}</h4>
              <br />
              <h5>${item.itemPrice}</h5>
            </div>
          ))}
        </div>

        {agreedToRules ? (
          <Button onClick={handleShowModal}>Create your RSVP</Button>
        ) : (
          <>
            <FormGroup>
              <FormControlLabel
                required
                control={<Checkbox />}
                label="I Agree to the event rules."
                onChange={handleCheckboxChange}
              />
            </FormGroup>
          </>
        )}
        <Modal
          className="customer-rsvp-modal"
          show={showConfirmModal}
          onHide={handleCloseModal}
        >
          <Modal.Body
            style={{ maxHeight: 'calc(100vh - 210px)', overflowY: 'scroll' }}
          >
            <CustomerRsvpForm
              eventItems={eventProp.eventItems}
              event={eventProp}
              eventTitle={eventProp.title}
            />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseModal}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </Card.Body>
    </Card>
  );
}
