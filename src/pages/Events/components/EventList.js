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
