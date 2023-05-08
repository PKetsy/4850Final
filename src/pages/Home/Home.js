import React from 'react';
import { SocialIcon } from 'react-social-icons';
import MenuImage from '../../components/MenuImage/MenuImage';
import Homepage_Hero_bg from '../../assets/Homepage_Hero_bg.png';
import FreshQuality from './FreshQuality/FreshQuality';
import OurTeam from './OurTeam/OurTeam';
import './Home.css';

const Home = () => {
  return (
    <div>
      <MenuImage bgImage={Homepage_Hero_bg} />
      <div className="welcome_message">
        <h4 className="welcome_box">Fresh produce and seafood! </h4>
        <h5 className="welcome_box">Check out our amazing products!</h5>
        <span className="hero_special_word">(636)-386-5050</span>
      </div>
      <div className="social_icons">
        <h4 className="welcome_box">Check out our Social Media Accounts!</h4>
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
      <FreshQuality />
      <OurTeam />
    </div>
  );
};

export default Home;
