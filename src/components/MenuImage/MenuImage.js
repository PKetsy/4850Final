import React from 'react';
import './MenuImage.css';

const MenuImage = (props) => {
  return (
    <div
      className="container"
      style={{
        background: `url(${props.bgImage}) no-repeat bottom center/cover`,
        height: '100vh',
      }}
    >
      <div className="banner-content">
        <h1 className="heading-primary">
          {props.heading}
          <p className="text-white">{props.text}</p>
        </h1>
      </div>
    </div>
  );
};

export default MenuImage;
