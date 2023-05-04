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
    <div className="section">
      <div className="container grid-container contact-content">
        <div>
          <h1 className="heading-secondary">
            Questions? <span>Call or email!</span>
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus,
            ducimus magnam excepturi blanditiis qui laborum illum tenetur
            repudiandae rerum quaerat at impedit quo eius odit quasi accusamus
            officia eligendi consequuntur.
          </p>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, non
            aut est iure corporis sed quis voluptate, nulla debitis aliquam ea
            inventore, quo dolores harum labore accusamus quod temporibus!
            Voluptatum!
          </p>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos a
            voluptatum atque voluptatem. Laudantium dolorum nemo suscipit id
            ipsa nulla ipsum quam debitis magni delectus dolores veniam, natus
            vero magnam!
          </p>
          <br />
        </div>

        <div className="contact-container">
          <h2>Send us an Email!</h2>
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
