import React, { useState } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './FreshQuality.css';
import { BsFillStarFill } from 'react-icons/bs';

import image1 from '../../../assets/FreshQuality1.png';
import image2 from '../../../assets/FreshQuality2.jpg';
import image3 from '../../../assets/FreshQuality3.jpg';
import image4 from '../../../assets/FreshQuality4.jpg';
import image5 from '../../../assets/FreshQuality5.jpg';
import image6 from '../../../assets/FreshQuality6.jpg';

import Slider from 'react-slick';

const FreshQuality = () => {
  const [items, setItems] = useState([
    { id: 1, url: image1 },
    { id: 2, url: image2 },
    { id: 3, url: image3 },
    { id: 4, url: image4 },
    { id: 5, url: image5 },
    { id: 6, url: image6 },
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
    <div className="fresh_section">
      <div className="fresh_container">
        <div className="containerr">
          <div className="fresh-carousel">
            <div>
              <Slider {...settings}>
                {items.map((items) => (
                  <div key={items.id}>
                    <img src={items.url} alt="carousel-pic" />
                  </div>
                ))}
              </Slider>
            </div>
          </div>

          <div className="fresh-content">
            <h2 className="fresh-heading-secondary">
              Amazing food
              <br />
              <span className="ampersand">& </span>
              <br />
              Great Quality
            </h2>
            <br />
            <h4>We hope to see you soon!</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero non,
              eligendi saepe cupiditate accusantium, sapiente maiores enim
              dignissimos fugit, asperiores velit omnis porro mollitia aliquid
              id ipsa est itaque tempora.
              <br />
              <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
              consectetur amet quasi officiis voluptatum voluptate illo
              inventore odio, ipsam sit pariatur nulla magni officia minima sunt
              illum reprehenderit ex? Nulla.
            </p>
            <blockquote>
              Nulla consequant massa quis enim. Doncus ut, imperdiet a.
            </blockquote>
          </div>
        </div>

        <div className="fresh-card-container">
          <div className="fresh-card fresh-card-left">
            <img src={image1} alt="key-fish" className="fresh-card-image" />
            <div className="fresh_card_content">
              <div className="fresh-card-title">
                <BsFillStarFill color="#c3512f" />
                <h3 className="heading-tertiary">Only the best quality!</h3>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Exercitationem temporibus rerum magni tempora sed quasi dolores
                praesentium recusandae vitae saepe dicta culpa, commodi modi
                dignissimos mollitia aut ullam a aperiam.
              </p>
            </div>
          </div>
          <div className="fresh-card fresh-card-center">
            <img src={image6} alt="strawberry" className="fresh-card-image" />
            <div className="fresh_card_content">
              <div className="fresh-card-title">
                <BsFillStarFill color="#c3512f" />
                <h3 className="heading-tertiary">
                  <span>Delicious Strawberries!</span>
                </h3>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Exercitationem temporibus rerum magni tempora sed quasi dolores
                praesentium recusandae vitae saepe dicta culpa, commodi modi
                dignissimos mollitia aut ullam a aperiam.
              </p>
            </div>
          </div>
          <div className="fresh-card fresh-card-right">
            <img
              src={image2}
              alt="royal_red_shrimp"
              className="fresh-card-image"
            />
            <div className="fresh_card_content">
              <div className="fresh-card-title">
                <BsFillStarFill color="#c3512f" />
                <h3 className="heading-tertiary">
                  <span>Royal Red Shrimp!</span>
                </h3>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Exercitationem temporibus rerum magni tempora sed quasi dolores
                praesentium recusandae vitae saepe dicta culpa, commodi modi
                dignissimos mollitia aut ullam a aperiam.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FreshQuality;
