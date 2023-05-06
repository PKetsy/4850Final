import React from 'react';
import './AboutInfo.css';

const AboutInfo = () => {
  return (
    <div>
      <div className="about-info">
        <div className="welcome_message">
          <h4 className="welcome_box">Fresh produce and seafood! </h4>
          <h5 className="welcome_box">Check out our amazing products!</h5>
          <span className="hero_special_word">(636)-386-5050</span>
        </div>
        <h2 className="heading">A Few Words About Us!</h2>

        <p>
          The Fruit Stand & Seafood is home to fresh food and seasonal goods
          year round ranging from healthy local vegetables to garden herbs to
          preserves from small vendors across the country.
        </p>
        <p>
          {' '}
          We know that being a conscientious and healthy shopper is important to
          our customers -- and that's why we go the distance to stock only the
          best. Don't see what you need on our shelves? We'll track it down for
          you. Because we've always been a family-owned and operated business,
          our mission is to treat our customers like they're family too.
        </p>
        <blockquote className="block">
          <h3>Family Traditions</h3>
        </blockquote>
        <p>
          My great-grandfather started selling fruit in St. Louis in the 1930s
          with his sons! One of these sons (my grandfather) continues the
          tradition to this day! My mother, aunts, uncles, and sisters all have
          fruit stand businesses around the St. Louis area! Each location is
          independently operated, and this exact location in Manchester started
          right after I graduated High school in 2007!
        </p>
      </div>

      <div className="about-info">
        <h2 className="heading_two">BEST QUALITY FOR YOU - ALWAYS</h2>

        <p>
          We offer the most locally sourced goods available from fruit to
          seafood, and everything in between. We specialize in seasonal goods
          and rare hard to find items! We are open 12 months a year, 7 days a
          week!
        </p>
        <blockquote className="block">
          <h2>Mission Statement</h2>
        </blockquote>
        <p>
          At The Fruit Stand & Seafood, our mission is to provide the highest
          quality produce, exceptional customer service, and a diverse range of
          competitively priced goods. We are dedicated to serving our customers
          with integrity and ensuring your satisfaction. We aim to one day be a
          nationally recognized organization that goes beyond just selling
          fruit, vegetables, seafood, and hard-to-find items. We strive to
          create a welcoming community hub where customers can not only find
          fresh and unique products...but to also gain knowledge and learn about
          the food they consume!
        </p>
        <p>
          We are committed to fostering community outreach initiatives, engaging
          with local organizations, and supporting causes that align with our
          values. We believe in the power of education and actively promote
          learning by sharing our knowledge about our products, their origins,
          and their health benefits. As a family-owned business, we cherish our
          roots and treat every customer as a member of our extended family.
        </p>
      </div>
    </div>
  );
};

export default AboutInfo;
