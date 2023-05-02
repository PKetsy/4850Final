import React from 'react';
import './AdminHome.css';

import { useNavigate } from 'react-router-dom';

import authStore from './stores/authStore';

const AdminHome = () => {
  const storeAuth = authStore();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await storeAuth.logout();
    navigate('/admin/logout');
  };

  const handleRoute = () => {
    navigate('/admin/events');
  };

  const handleSignup = () => {
    navigate('/admin/signup');
  };

  const handleLookup = () => {
    navigate('/admin/rsvps');
  };

  const handleMenu = () => {
    navigate('/admin/menu');
  };

  return (
    <div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="admin-home">
        <h2>Welcome to the Admin Dashboard</h2>
        <h4>Please select a button to continue</h4>
      </div>

      <br />
      <br />
      <div className="admin-button-container">
        <button className="btn btn-danger mx-3" onClick={handleLogout}>
          Logout
        </button>
        <button className="btn btn-primary mx-3" onClick={handleRoute}>
          Manage Events
        </button>
        <button className="btn btn-warning mx-3" onClick={handleLookup}>
          Lookup Customers
        </button>
        <button className="btn btn-info mx-3" onClick={handleMenu}>
          Manage Menu Items
        </button>
        <button className="btn btn-success mx-3" onClick={handleSignup}>
          Add another Admin
        </button>
      </div>
    </div>
  );
};

export default AdminHome;
