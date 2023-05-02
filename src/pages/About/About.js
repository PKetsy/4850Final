import React from 'react';
import MenuImage from '../../components/MenuImage/MenuImage';
import bgImage from '../../assets/AboutUs.jpg';

import AboutInfo from './AboutInfo/AboutInfo';
import OurData from './OurData/OurData';
import Gallery from './Gallery/Gallery';

const About = () => {
  return (
    <div>
      <MenuImage bgImage={bgImage} />
      <AboutInfo />
      <OurData />
      <Gallery />
    </div>
  );
};

export default About;
