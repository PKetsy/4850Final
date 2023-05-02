import React from 'react';
import { SocialIcon } from 'react-social-icons';
import MenuImage from '../../components/MenuImage/MenuImage';
import bgImage from '../../assets/ContactUs.jpg';
import ContactForm from './ContactForm/ContactForm';

const Contact = () => {
  return (
    <div>
      <MenuImage bgImage={bgImage} />
      <div className="welcome_message">
        <h4 className="welcome_box">Questions / Comments? </h4>
        <h5 className="welcome_box">Email or call us!</h5>
        <span className="hero_special_word">(636)-386-5050</span>
      </div>
      <div className="social_icons">
        <h4 className="welcome_box">
          You can also send us a message on Social Media!
        </h4>
        <SocialIcon
          url="https://www.facebook.com/thefruitstand"
          target="_blank"
          style={{ height: 50, width: 50, marginRight: 10 }}
          fgColor="#fff"
          bgColor="#3b5998"
        />
        <SocialIcon
          url="https://www.instagram.com/stlfruit/?hl=en"
          target="_blank"
          style={{ height: 50, width: 50 }}
          fgColor="#fff"
          bgColor="#e1306c"
        />
      </div>
      <ContactForm />
    </div>
  );
};

export default Contact;
