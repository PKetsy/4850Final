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
    { id: 1, url: image2 },
    { id: 2, url: image1 },
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
              The Fruit Stand & Seafood takes immense pride in the quality of
              the food we provide to you for several important reasons.
              <br />
              <br />
              First and foremost, we understand that the quality of the food
              directly impacts the satisfaction and loyalty of our customers. By
              offering fresh, flavorful, and high-quality fruits, vegetables,
              seafood, and scratch-made items, we aim to create a memorable
              culinary experience that keeps you coming back.
              <br />
              <br />
              We believe that every customer deserves to enjoy the best and
              healthiest ingredients, and we are committed to delivering just
              that!
              <br />
              <br />
              Secondly, The Fruit Stand & Seafood is driven by showcasing the
              finest items available. The care and attention we put into
              sourcing our products reflects our dedication to delivering
              excellence. Each week we vist local Amish farms, and source our
              seafood through fresh, high quality coastal providers.
            </p>
            <blockquote>
              <h2>Locally sourced</h2>
            </blockquote>
            <p>
              Moreover, The Fruit Stand & Seafood recognizes the importance of
              supporting local farmers, fishermen, and producers. We take pride
              in forming strong partnerships with our trusted suppliers who
              share their commitment to quality and sustainability. By
              prioritizing locally sourced ingredients, we contribute to the
              local economy, promote environmental stewardship, and foster a
              sense of community.
            </p>
            <p>
              Ultimately, we want to ensure the highest quality food products
              for YOU. We are honored to provide you products for an memorable
              culinary experience with your family and friends.
            </p>
          </div>
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
                These Royal Red Shrimp are one of our most popular items! Royal
                Red Shrimp have a delicate and sweet flavor, often described as
                similar to lobster. These shrimps are known for their vibrant
                red colors, which intensify when cooked. These shrimp are
                generally larger than most shrimp species, and inhabit waters
                from 200-2000ft deep. Due to these depths, they are bit more
                challenging to catch compared to other shallow-water shrimps.
                These shrimp can be boiled, grilled, or sautéed to perfection,
                and are fantasitc in numerous recipes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FreshQuality;
