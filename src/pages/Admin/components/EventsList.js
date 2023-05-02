import React from 'react';
import Container from 'react-bootstrap/Container';
import EventCard from './EventCard';

const EventsList = ({ events }) => {
  return (
    <Container>
      {events &&
        events.map((event) => {
          return <EventCard key={event._id} event={event} />;
        })}
    </Container>
  );
};

export default EventsList;
