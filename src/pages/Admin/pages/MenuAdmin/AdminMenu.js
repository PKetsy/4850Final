import React, { useEffect } from 'react';
import menuStore from '../../stores/menuStore';
import { useNavigate } from 'react-router-dom';
import CreateItems from './CreateItems';
import Items from './Items';
import UpdateItems from './UpdateItems';

import './AdminMenu.css';

export default function AdminMenu() {
  const store = menuStore();

  const navigate = useNavigate();

  const handleReturn = () => {
    navigate('/admin');
  };

  useEffect(() => {
    store.getMenuItems();
  }, []);

  return (
    <>
      <div>
        <br />
        <br />
        <h1 className="heading-title">Menu Items Management</h1>
        <div className="admin-return">
          <button className="btn btn-warning mx-3" onClick={handleReturn}>
            Return to Admin Home
          </button>
          <a
            href="https://docs.google.com/document/d/1R6RP9nxTAGJHMKezv5BuVAhkGZzikRHbAX6hDAa8VBk/edit#bookmark=id.9dearh9o3g20"
            className="btn btn-link btn-lg active"
            role="button"
            aria-pressed="true"
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            Menu-Items Help
          </a>
        </div>
        <CreateItems />
        <hr />
        <UpdateItems />
      </div>
      <br />
      <Items />
      <br />
    </>
  );
}
