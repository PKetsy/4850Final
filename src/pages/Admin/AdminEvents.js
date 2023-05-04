import React, { useEffect } from 'react';

import eventsStore from './stores/eventsStore';
import Events from './components/Events';
import CreateEvent from './components/CreateEvent';
import UpdateEvent from './components/UpdateEvent';

import './AdminEvents.css';

export default function AdminEvents() {
  const store = eventsStore();

  useEffect(() => {
    store.fetchEvents();
  }, []);

  return (
    <div>
      <br></br>
      <br />
      <br />
      <h2 className="event-admin-home">Welcome to the Events Dashboard</h2>
      <hr />
      <CreateEvent />
      <br />
      <hr />
      <UpdateEvent />
      <br />
      <br />
      <Events />
      <br />
      <br />
    </div>
  );
}
