import React, { useState } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './FreshQuality.css';
import { BsFillStarFill } from 'react-icons/bs';

import image1 from '../../../assets/FreshQualityFlowers.jpg';
import image2 from '../../../assets/FreshQuality2.jpg';
import image3 from '../../../assets/FreshQuality3.jpg';
import image4 from '../../../assets/FreshQuality4.jpg';
import image5 from '../../../assets/FreshQuality5.jpg';
import image6 from '../../../assets/FreshQuality6.jpg';
import image7 from '../../../assets/FreshQuality1.png';

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
            <img src={image7} alt="key-fish" className="fresh-card-image" />
            <div className="fresh_card_content">
              <div className="fresh-card-title">
                <BsFillStarFill color="#c3512f" />
                <h3 className="heading-tertiary">Only the best quality!</h3>
              </div>
              <h4>
                The Fruit Stand & Seafood is extremely well connected with
                produce farmers, seafood providers, and fisherman alike. Make
                sure to keep an eye out for our exciting events, and don't
                forget to RSVP! Our Seafood events will leave you in awe! Events
                such as our Alaska Fishing Trips, Florida Keys Trips, Maine
                Lobster Tail Trips, and Louisiana Crawfish Trips!
              </h4>
            </div>
          </div>
          <div className="fresh-card fresh-card-center">
            <img src={image6} alt="strawberry" className="fresh-card-image" />
            <div className="fresh_card_content">
              <div className="fresh-card-title">
                <BsFillStarFill color="#c3512f" />
                <h3 className="heading-tertiary">
                  <span> Delicious Produce!</span>
                </h3>
              </div>
              <h4>
                Our Fruits and Vegetables come from the highest quality
                providers we can find! Each week we venture out to local Amish
                farms to obtain the most fresh goods possible for you! We
                encourage you to vist our store, and to see exactly what we are
                talking about!
              </h4>
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
              <h4>Let Me Tell You A Story About Our ROYAL RED SHRIMP!</h4>
              <h4>
                These are absolutely delicious, and tastes like Lobster. These
                beauties are sold everyday at our store, and by far one of the
                most popular seafood items.
              </h4>
              <h4>
                These shrimp may look already cooked, but they are not! This red
                color is due to the extremely deep water in which they reside,
                which is usually between 300 - 1,500 foot deep!
              </h4>
              <h4>
                Where exactly do these come from?....The Gulf of Mexico! Royal
                Reds are caught in the Eastern Gulf of Mexico between Alabama
                and Southern Florida.
              </h4>
              <h4>
                A few times a year, we will have 'special' Fresh-Head-On Royal
                Reds!
              </h4>
              <h4>
                However, every single day we are well stocked on the
                Huge-Head-Off 12/15 EZ-Peel Royal Reds. These are both split,
                and deveined.
              </h4>
              <h4>
                You may check the MENU page on this website for more accurate
                pricing, but generally we sell these for $14.99 per lb. We have
                these in pre-weighed 2lb bags, but you can make the bag any size
                you wish!
              </h4>
              <h4>We also offer PEELED Royal Red Shrimp for $15.99 per lb.</h4>
              <h4>
                Again, these Royal Reds are by far the most popular seafood item
                in our store. These shrimp are sweet and tender, and loved by
                all.
              </h4>
              <h4>
                They are great boiled, BBQed, in tacos, Alfredo, or Fried.
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FreshQuality;
