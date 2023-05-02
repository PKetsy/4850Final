import React from 'react';
import EventList from './components/EventList';

import MenuImage from '../../components/MenuImage/MenuImage';
import Eventhero from '../../assets/Eventhero.jpg';
import './EventHome.css';
import Link from '@mui/material/Link';

const EventHome = () => {
  return (
    <div className="section">
      <MenuImage bgImage={Eventhero} />
      <div className="container-grid-container">
        <div className="about-info-content">
          <div className="welcome_message">
            <span className="hero_special_word">OUR AMAZING EVENTS</span>
            <h5 className="welcome_box">Make sure to RSVP!</h5>
          </div>
          <h2 className="heading">
            <br></br>
            Quick rules about our Events!
          </h2>
          <br></br>
          <h4>1. Event items are sold by the pound.</h4>
          <h5>
            This can include fish filets, or shellfish. If you have questions
            about specific items for a certain event, please give our store a
            call at{` `}
            <b>
              <i>
                <u> 636-386-5050</u>
              </i>
            </b>
            .
          </h5>
          <br></br>
          <h4>
            2. EVERY ORDER will require a 50% down payment of your order total.
            Your order will not be fulfilled unless you prepay first.
          </h4>
          <br></br>
          <h4>
            This website does not support online payments such as Credit Card,
            or Paypal. If you want to ensure that we will pick up your items,
            please submit your 50% down ASAP.
          </h4>
          <div className="heading">
            <h1>How to pay:</h1>
            <br />
            <h2>
              <Link
                underline="none"
                href="https://venmo.com/code?user_id=2453530736590848741"
              >
                Venmo: @fruit-stand{' '}
              </Link>
            </h2>
            <br />
            <h2>Call us, or visit us!</h2>
          </div>

          <br />
          <h4>
            3. Once the Event items reach our store,
            <u> customers are required to pick up their orders in store.</u>
          </h4>
          <h5>
            <b>
              <u>WE DO NOT OFFER DELIVERY SERVICE FOR ANY EVENT ITEMS!!</u>
            </b>
          </h5>
        </div>
      </div>
      <div>
        <br></br>
        <EventList />
      </div>
    </div>
  );
};

export default EventHome;
