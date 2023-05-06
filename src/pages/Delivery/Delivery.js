import React from 'react';

import MenuImage from '../../components/MenuImage/MenuImage';
import DeliveryHome from '../../assets/DeliveryHome.jpg';
import DeliveryInfo from './DeliveryInfo/DeliveryInfo';

const Delivery = () => {
  return (
    <div>
      {' '}
      <MenuImage bgImage={DeliveryHome} />
      <DeliveryInfo />
    </div>
  );
};

export default Delivery;
