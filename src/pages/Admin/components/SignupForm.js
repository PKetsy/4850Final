import authStore from '../stores/authStore';
import { useNavigate } from 'react-router-dom';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import './SignupForm.css';

function SignupForm() {
  const store = authStore();
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    await store.signup();
    navigate('/admin/login');
  };

  const handleReturn = () => {
    navigate('/admin');
  };

  return (
    <Form
      onSubmit={handleSignup}
      style={{
        width: '40%',
        margin: '0 auto',
        marginTop: 0,
      }}
    >
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          name="email"
          value={store.signupForm.email}
          onChange={store.updateSignupForm}
        />
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          name="password"
          value={store.signupForm.password}
          onChange={store.updateSignupForm}
        />
      </Form.Group>

      <Button
        variant="primary"
        type="submit"
        style={{ display: 'block', margin: '10px auto' }}
      >
        Sign up
      </Button>
      <Button
        variant="secondary"
        onClick={handleReturn}
        style={{ display: 'block', margin: '10px auto' }}
      >
        Return
      </Button>
    </Form>
  );
}

export default SignupForm;
