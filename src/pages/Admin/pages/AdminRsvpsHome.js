import React from 'react';
import AdminRsvpsTable from './AdminRsvpsTable';
import { useNavigate } from 'react-router-dom';

import './AdminRsvpsHome.css';

const AdminRsvpsHome = () => {
  const navigate = useNavigate();
  const handleReturn = () => {
    navigate('/admin');
  };

  return (
    <>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="admin-return">
        <button className="btn btn-warning mx-3" onClick={handleReturn}>
          Return to Admin Home
        </button>
      </div>
      <br />
      <div className="admin-rsvps-home">
        <h1 className="dash-heading">Admin RSVP Dashboard</h1>
        <AdminRsvpsTable />
      </div>
    </>
  );
};

export default AdminRsvpsHome;
