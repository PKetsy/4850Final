import React, { useEffect } from 'react';
import eventsStore from '../../Admin/stores/eventsStore';
import CustomerEvents from './CustomerEvents';
import './EventList.css';

export default function EventList() {
  const store = eventsStore();

  useEffect(() => {
    store.fetchEvents();
  }, []);

  return (
    <div>
      <h2 className="event-heading">Events:</h2>
      <a
        href="https://docs.google.com/document/d/1ItF3sCqcHg_XTVbRq--39yT2bIwF_HC9aJK3rt1vhns/edit#bookmark=id.9zj2gm154c30"
        className="btn btn-primary btn-lg active"
        role="button"
        aria-pressed="true"
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        Event and RSVP help
      </a>
      {store.events &&
        store.events.map((event, index) => {
          return (
            <div key={event._id} style={{ marginBottom: '35px' }}>
              <CustomerEvents event={event} eventId={event._id} />
            </div>
          );
        })}
    </div>
  );
}

// import React, { useEffect, useState } from 'react';
// import { Card, ListGroup } from 'react-bootstrap';
// import axios from 'axios';

// const EventsList = () => {
//   const [events, setEvents] = useState([]);

//   useEffect(() => {
//     // Fetch the events from the server when the component mounts
//     axios
//       .get('/admin/events')
//       .then((response) => {
//         setEvents(response.data);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   }, []);

//   return (
//     <div>
//       {events.map((event) => (
//         <Card key={event._id} style={{ marginBottom: '1rem' }}>
//           <Card.Header>{event.title}</Card.Header>
//           <Card.Body>
//             <Card.Title>{event.title}</Card.Title>
//             <Card.Text>{event.description}</Card.Text>
//             <ListGroup>
//               <ListGroup.Item>Start Date: {event.startDate}</ListGroup.Item>
//               <ListGroup.Item>End Date: {event.endDate}</ListGroup.Item>
//               {event.eventItems.map((item) => (
//                 <ListGroup.Item key={item._id}>
//                   {item.itemName}: {item.itemPrice}
//                 </ListGroup.Item>
//               ))}
//             </ListGroup>
//           </Card.Body>
//         </Card>
//       ))}
//     </div>
//   );
// };

// export default EventsList;
