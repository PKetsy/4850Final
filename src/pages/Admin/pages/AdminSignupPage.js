import { useState } from 'react';
import SecretWordModal from '../components/SecretWordModal';
import SignupForm from '../components/SignupForm';
import './AdminSignupPage.css';

function AdminSignupPage(props) {
  const [showSecretWordModal, setShowSecretWordModal] = useState(true);
  const [enteredCorrectSecretWord, setEnteredCorrectSecretWord] =
    useState(false);

  function handleCorrectSecretWord() {
    setShowSecretWordModal(false);
    setEnteredCorrectSecretWord(true);
  }

  if (enteredCorrectSecretWord) {
    // Render the signup form
    return (
      <div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <h1 className="display-1">Create an Admin Account</h1>
        <SignupForm />
      </div>
    );
  } else {
    // Render the secret word modal
    return (
      <div>
        <SecretWordModal
          show={showSecretWordModal}
          onHide={() => setShowSecretWordModal(false)}
          correctSecretWord="Thebestseafoodever"
          onCorrectSecretWord={handleCorrectSecretWord}
        />
      </div>
    );
  }
}

export default AdminSignupPage;
