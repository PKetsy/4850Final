import React, { useEffect } from 'react';
import eventsStore from '../stores/eventsStore';
import Event from './Event';

export default function Events() {
  const store = eventsStore();

  useEffect(() => {
    store.fetchEvents();
  }, []);

  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Events:</h1>
      {store.events &&
        store.events.map((event, index) => {
          return (
            <div key={event._id} style={{ marginBottom: '35px' }}>
              <Event event={event} />
            </div>
          );
        })}
    </div>
  );
}
