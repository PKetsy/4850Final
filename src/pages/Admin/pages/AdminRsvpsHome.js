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
      <div className="admin-return">
        <button className="btn btn-warning mx-3" onClick={handleReturn}>
          Return to Admin Home
        </button>
        <a
          href="https://docs.google.com/document/d/1R6RP9nxTAGJHMKezv5BuVAhkGZzikRHbAX6hDAa8VBk/edit#bookmark=id.7bd01xm89jpi"
          className="btn btn-link btn-lg active"
          role="button"
          aria-pressed="true"
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            width: '33%',
          }}
        >
          RSVP Dashboard Help
        </a>
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
