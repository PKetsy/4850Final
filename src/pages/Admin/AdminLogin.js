import React from 'react';
import LoginForm from './components/LoginForm';

import './AdminLogin.css';

export default function AdminLogin() {
  return (
    <div>
      <div>
        <div>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <h1 className="headingOne">Admin Login</h1>
          <LoginForm />
        </div>
      </div>
    </div>
  );
}
