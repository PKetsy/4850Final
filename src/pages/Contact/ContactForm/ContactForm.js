import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './ContactForm.css';

const ContactForm = () => {
  const form = useRef();
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const emailValidation = () => {
    const regEx = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g;
    if (regEx.test(email)) {
      setMessage('Email valid : Message was sent.');
      setTimeout(() => {
        setMessage('');
        setEmail('');
      }, 5000); //clear message after 5 seconds
    } else if (!regEx.test(email) && email !== '') {
      setMessage('Email is not Valid');
    } else {
      setMessage('');
      setEmail('');
    }
  };

  const handleOnChange = (e) => {
    setEmail(e.target.value);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_uxv4t86',
        'template_z0yyira',
        form.current,
        'bV7leNf-sQ9Pk6pPE'
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log('Message Sent');
          e.target.reset();
          setEmail('');
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="contact-section">
      <div className="container grid-container contact-content">
        <div>
          <h1 className="heading-secondary">
            <b> General Questions?</b>
          </h1>
          <br />
          <h4>
            Please do not hesitate to contact us, we are happy to answer any
            questions you may have about our store, and our products.
          </h4>
          <hr />
          <br />
          <h1 className="heading-secondary">
            <b> Questions regarding wholesale?</b>
          </h1>
          <br />
          <h4>
            Our Operations and Wholesale Manager, Cheryll Sullens will be happy
            to assist you. You may reach her regarding wholesale inquiries at
            (314)-791-3074
          </h4>
          <hr />
          <h1 className="heading-secondary">
            <b> You can also send us an email in the form below!</b>
          </h1>
          <h4>
            If our phone lines are extremely busy, we encourage that you send us
            an email with your question, comment or concern, and we will get
            back to you within 24-48 hours!
          </h4>
          <hr />
          <br />
        </div>

        <div className="contact-container">
          <b>
            <h2>Send us an Email!</h2>
          </b>
          <form ref={form} onSubmit={sendEmail} className="contact-form">
            <label htmlFor="name" className="label">
              Name
            </label>

            <input
              type="text"
              name="user_name"
              placeholder="Name"
              autoComplete="off"
            />

            <label htmlFor="email" className="label">
              Email
            </label>
            <input
              id="email"
              className="input"
              type="email"
              name="user_email"
              placeholder="email"
              value={email}
              onChange={handleOnChange}
              autoComplete="off"
            />
            <label>Message</label>
            <textarea name="message" className="contact-form-message" />
            <input type="submit" value="Send" onClick={emailValidation} />
          </form>
          <p className="message">{message}</p>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
