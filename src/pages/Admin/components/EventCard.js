import React from 'react';
import moment from 'moment';

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './EventCard.css';

const EventCard = ({ event, updateEvent, deleteEvent }) => {
  return (
    <Card border="dark" bg="light">
      <Card.Header>
        <Card.Title className="title-xl">{event.title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          {moment(event.startDate).format('MM-DD-YYYY')} -{' '}
          {moment(event.endDate).format('MM-DD-YYYY')}
        </Card.Subtitle>
      </Card.Header>
      <Card.Body>
        <Card.Text>{event.description}</Card.Text>
        <h1>
          <u>Items available</u>
        </h1>
        <hr />
        {event.eventItems.map((item) => (
          <div key={item._id}>
            <hr />
            <div key={item._id} className="card-item-box">
              <h4>{item.itemName}</h4>
              <h5>${item.itemPrice}</h5>
            </div>
          </div>
        ))}
        <hr />
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
        >
          <Button
            variant="outline-info"
            onClick={() =>
              updateEvent(
                event._id,
                event.title,
                event.startDate,
                event.endDate,
                event.description,
                event.eventItems
              )
            }
          >
            UPDATE
          </Button>
          <Button
            variant="outline-danger"
            onClick={() => deleteEvent(event._id)}
          >
            DELETE
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default EventCard;
