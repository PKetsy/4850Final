import React, { useEffect } from 'react';
import authStore from './stores/authStore';

import './AdminLogout.css';
export default function AdminLogout() {
  const store = authStore();

  useEffect(() => {
    store.logout();
  }, [store]);

  return (
    <div>
      <div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <h2 className="admin-logout">You are now logged out</h2>
      </div>
    </div>
  );
}
