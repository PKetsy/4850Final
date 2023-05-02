import React, { useState } from 'react';
import { SocialIcon } from 'react-social-icons';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Gallery.css';

import Slider from 'react-slick';

import galleryImage1 from '../../../assets/galleryImage1.jpg';
import galleryImage2 from '../../../assets/galleryImage2.jpg';
import galleryImage3 from '../../../assets/galleryImage3.jpg';
import galleryImage4 from '../../../assets/galleryImage4.jpg';
import galleryImage5 from '../../../assets/galleryImage5.jpg';
import galleryImage6 from '../../../assets/galleryImage6.jpg';
import galleryImage7 from '../../../assets/galleryImage7.jpg';
import galleryImage8 from '../../../assets/galleryImage8.jpg';
import galleryImage9 from '../../../assets/galleryImage9.jpg';
import galleryImage10 from '../../../assets/galleryImage10.jpg';
import galleryImage11 from '../../../assets/galleryImage11.jpg';
import galleryImage12 from '../../../assets/galleryImage12.jpg';
import galleryImage13 from '../../../assets/galleryImage13.jpg';
import galleryImage14 from '../../../assets/galleryImage14.jpg';
import galleryImage15 from '../../../assets/galleryImage15.jpg';

const Gallery = () => {
  const [items, setItems] = useState([
    { id: 1, url: galleryImage1 },
    { id: 1, url: galleryImage2 },
    { id: 1, url: galleryImage3 },
    { id: 1, url: galleryImage4 },
    { id: 1, url: galleryImage5 },
    { id: 1, url: galleryImage6 },
    { id: 1, url: galleryImage7 },
    { id: 1, url: galleryImage8 },
    { id: 1, url: galleryImage9 },
    { id: 1, url: galleryImage10 },
    { id: 1, url: galleryImage11 },
    { id: 1, url: galleryImage12 },
    { id: 1, url: galleryImage13 },
    { id: 1, url: galleryImage14 },
    { id: 1, url: galleryImage15 },
  ]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <div className="about-section">
      <div className="container">
        <div className="about-container">
          <div className="about-carousel">
            <div>
              <div className="social_icons">
                <h4 className="welcome_box">
                  Check out our other photo galleries!!
                </h4>
                <SocialIcon
                  url="https://www.facebook.com/thefruitstand/photos/"
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
              <Slider {...settings}>
                {items.map((items) => (
                  <div key={items.id}>
                    <img src={items.url} alt="carousel-pic" />
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
