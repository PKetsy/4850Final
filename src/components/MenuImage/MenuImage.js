import React from 'react';
import './MenuImage.css';

const MenuImage = (props) => {
  const { bgImage } = props;

  const imageStyle = {
    backgroundImage: `url(${bgImage})`,
  };

  return <div className="image-container" style={imageStyle}></div>;
};

export default MenuImage;
