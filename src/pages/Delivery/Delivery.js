import React from 'react';

import MenuImage from '../../components/MenuImage/MenuImage';
import bgImage from '../../assets/MenuBg.jpg';
import DeliveryInfo from './DeliveryInfo/DeliveryInfo';

const Delivery = () => {
  return (
    <div>
      {' '}
      <MenuImage
        bgImage={bgImage}
        heading={['We', <span> DELIVER</span>]}
        text="Call us to place your order!"
      />
      <DeliveryInfo />
    </div>
  );
};

export default Delivery;
