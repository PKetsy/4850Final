import React from 'react';

import { BsFillStarFill } from 'react-icons/bs';

import './DeliveryInfo.css';
import DeliveryRadius1 from '../../../assets/DeliveryRadius1.jpg';
import DeliveryRadius2 from '../../../assets/DeliveryRadius2.jpg';

const DeliveryInfo = () => {
  return (
    <div className="section-delivery-info">
      <div className="container">
        <div className="grid-container">
          <div>
            <div className="delivery-iconbox">
              <BsFillStarFill color="#c3512f" />
              <h3 className="headting-tertiary">
                <span>Delivery FAQs</span>
              </h3>
            </div>
            <ul>
              <li>
                <b>**Only orders over $25 are eligible for delivery.**</b>
              </li>
              <li>-Every Wednesday will be Delivery day.</li>
              <li>-Orders must be placed before 12pm Wednesday.</li>
              <li>
                *1st smaller circle will have a <b>$5 Delivery fee</b>.
              </li>
              <img
                src={DeliveryRadius1}
                alt="delivery-radius1"
                className="delivery-card-image"
              />
              <li>
                **2nd larger circle <b>$8.50 fee + 5% of order</b>.
              </li>
              <img
                src={DeliveryRadius2}
                alt="delivery-radius2"
                className="delivery-card-image"
              />
              <li>-No % fee for any order over $100!!</li>
              <br></br>
              <h2>Outside of the circle?...</h2>
              <li>
                Get some friends together, or make a large order and we can
                accommodate delivery!
              </li>
              <li>** $250 order minimum for 20-30 miles</li>
              <li>** $400 order minimum for 31-45 miles</li>
              <p>
                <b>Fees will apply: $8.50 + 5%</b>
              </p>
            </ul>
          </div>

          <div>
            <div className="welcome_message">
              <h4 className="welcome_box">
                Every item in store is eligible for delivery! (excluding Event
                items)
              </h4>
              <h5 className="welcome_box">Call to place your order!</h5>
              <span className="hero_special_word">(636)-386-5050</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeliveryInfo;
