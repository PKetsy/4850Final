import React from 'react';
import { Link, Element } from 'react-scroll';

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
import SeasonalItems from './Seasonal Items/SeasonalItems';
import Flowers from './Flowers/Flowers';
import FreshCut from './FreshCut/FreshCut';

const Menu = () => {
  return (
    <div>
      <MenuImage bgImage={bgImage} />
      <div className="welcome_message">
        <h4 className="welcome_box">THE MENU </h4>
        <h5 className="welcome_box">Questions?</h5>
        <span className="hero_special_word">(636)-386-5050</span>
      </div>
      <div className="category-find">
        <h4>
          Click on any of the categories in this list to be automatically
          navigated to the category of your choosing.
        </h4>
        <hr />
        <nav>
          <ul className="centered-links">
            <li>
              <Link
                to="ourMostPopular"
                smooth={true}
                duration={500}
                offset={-120}
              >
                Our Most Popular
              </Link>
            </li>
            <li>
              <Link to="sales" smooth={true} duration={500} offset={-120}>
                Sales
              </Link>
            </li>
            <li>
              <Link to="fruits" smooth={true} duration={500} offset={-120}>
                Fruits
              </Link>
            </li>
            <li>
              <Link to="vegetables" smooth={true} duration={500} offset={-120}>
                Vegetables
              </Link>
            </li>
            <li>
              <Link to="seafood" smooth={true} duration={500} offset={-120}>
                Seafood
              </Link>
            </li>
            <li>
              <Link to="kenricks" smooth={true} duration={500} offset={-120}>
                Kenricks Products
              </Link>
            </li>
            <li>
              <Link to="misc" smooth={true} duration={500} offset={-120}>
                Miscellaneous
              </Link>
            </li>
            <li>
              <Link to="beverages" smooth={true} duration={500} offset={-120}>
                Beverages
              </Link>
            </li>
            <li>
              <Link
                to="seasonalItems"
                smooth={true}
                duration={500}
                offset={-120}
              >
                Seasonal Items
              </Link>
            </li>
            <li>
              <Link to="flowers" smooth={true} duration={500} offset={-120}>
                Flowers
              </Link>
            </li>
            <li>
              <Link to="freshCut" smooth={true} duration={500} offset={-120}>
                Fresh Cut Kitchen Items
              </Link>
            </li>
          </ul>
          <hr />
        </nav>
      </div>

      <Element name="ourMostPopular">
        <OurMostPopular />
      </Element>
      <Element name="sales">
        <Sales />
      </Element>
      <Element name="fruits">
        <Fruits />
      </Element>
      <Element name="vegetables">
        <Vegetables />
      </Element>
      <Element name="seafood">
        <Seafood />
      </Element>
      <Element name="kenricks">
        <Kenricks />
      </Element>
      <Element name="misc">
        <Misc />
      </Element>
      <Element name="beverages">
        <Beverages />
      </Element>
      <Element name="seasonalItems">
        <SeasonalItems />
      </Element>
      <Element name="flowers">
        <Flowers />
      </Element>
      <Element name="freshCut">
        <FreshCut />
      </Element>
    </div>
  );
};

export default Menu;
