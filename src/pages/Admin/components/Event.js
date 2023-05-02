import React, { useState } from 'react';
import eventsStore from '../stores/eventsStore';
import Modal from 'react-bootstrap/Modal';
import { Card, Button } from 'react-bootstrap';
import moment from 'moment';
import './Event.css';

export default function Event({ event }) {
  const [showConfirmModal, setShowConfirmModal] = useState(false);

  const store = eventsStore((store) => {
    return { toggleUpdate: store.toggleUpdate, deleteEvent: store.deleteEvent };
  });

  return (
    <Card key={event._id} border="dark" bg="light">
      <Card.Header>
        <div className="text-center" key={event._id}>
          <Card.Title className="title-xl" key={event._id}>
            {event.title}
          </Card.Title>

          <Card.Subtitle className="mb-2 text-muted card-subtitle">
            {moment(event.startDate).format('MM-DD-YYYY')} -{' '}
            {moment(event.endDate).format('MM-DD-YYYY')}
          </Card.Subtitle>
        </div>
      </Card.Header>
      <Card.Body className="card bg-light">
        <div
          key={event._id}
          className="d-flex justify-content-center align-items-center flex-column"
        >
          <hr />
          <h5 className="text-center">{event.description}</h5>
          <hr />
          <h1 className="text-center">
            <u>Items Available</u>
          </h1>

          {event.eventItems.map((item) => (
            <div key={item._id} className="mx-auto card-item-box text-center">
              <h4>{item.itemName}</h4>
              <br />
              <h5>${item.itemPrice}</h5>
            </div>
          ))}
          <hr />
          <div className="d-flex justify-content-between">
            <Button
              variant="primary"
              onClick={() => store.toggleUpdate(event)}
              style={{ marginRight: '15px' }}
            >
              Update event
            </Button>
            <Button
              variant="danger"
              onClick={() => setShowConfirmModal(true)}
              style={{ marginLeftt: '15px' }}
            >
              Delete event
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
          Are you sure you want to delete the event "{event.title}"?
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={() => setShowConfirmModal(false)}
          >
            Cancel
          </Button>
          <Button variant="danger" onClick={() => store.deleteEvent(event._id)}>
            Confirm Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </Card>
  );
}
