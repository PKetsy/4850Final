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
        <br />
        <br />
        <br />
        <br />
        <h1 className="heading-title">Menu Items Management</h1>
        <div className="admin-return">
          <button className="btn btn-warning mx-3" onClick={handleReturn}>
            Return to Admin Home
          </button>
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
