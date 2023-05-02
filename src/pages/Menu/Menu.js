import React from 'react';

import './Menu.css';

import MenuImage from '../../components/MenuImage/MenuImage';
import bgImage from '../../assets/MenuBg.jpg';
import OurMostPopular from './OurMostPopular/OurMostPopular';
import Sales from './Sales/Sales';
import Fruits from './Fruits/Fruits';
import Vegetables from './Vegetables/Vegetables';
import Seafood from './Seafood/Seafood';
import Kenricks from './Kenricks/Kenricks';
import Misc from './Misc/Misc';
import Beverages from './Beverages/Beverages';

const Menu = () => {
  return (
    <div>
      <MenuImage bgImage={bgImage} />
      <div className="welcome_message">
        <h4 className="welcome_box">THE MENU </h4>
        <h5 className="welcome_box">Questions?</h5>
        <span className="hero_special_word">(636)-386-5050</span>
      </div>
      <OurMostPopular />
      <Sales />
      <Fruits />
      <Vegetables />
      <Seafood />
      <Kenricks />
      <Misc />
      <Beverages />
    </div>
  );
};

export default Menu;
