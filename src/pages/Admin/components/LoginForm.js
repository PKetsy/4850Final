import React from 'react';
import { useNavigate } from 'react-router-dom';
import authStore from '../stores/authStore';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import './LoginForm.css';

export default function LoginForm() {
  const store = authStore();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    await store.login();
    navigate('/admin');
  };

  return (
    <Form onSubmit={handleLogin} style={{ width: '40%', margin: '0 auto' }}>
      <Form.Group controlId="formBasicEmail">
        <Form.Label style={{ textAlign: 'center', display: 'block' }}>
          Email address
        </Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          name="email"
          value={store.loginForm.email}
          onChange={store.updateLoginForm}
          style={{ width: '100%' }}
        />
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label style={{ textAlign: 'center', display: 'block' }}>
          Password
        </Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          name="password"
          value={store.loginForm.password}
          onChange={store.updateLoginForm}
          style={{ width: '100%' }}
        />
      </Form.Group>
      <br />
      <Button
        variant="primary"
        type="submit"
        style={{ display: 'block', margin: '0 auto' }}
      >
        Login
      </Button>
    </Form>
  );
}
