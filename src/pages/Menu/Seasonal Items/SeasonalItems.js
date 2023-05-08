import React, { useEffect } from 'react';
import ListItem from '../../../components/ListItem/ListItem';
import menuStore from '../../Admin/stores/menuStore';

import './SeasonalItems.css';

const SeasonalItems = () => {
  const store = menuStore();

  useEffect(() => {
    store.getMenuItems();
  }, []);

  return (
    <div className="container-seasonal">
      <h1 className="heading-secondary">
        <span>SEASONAL ITEMS</span>
      </h1>

      <div className="grid-container">
        <div>
          {store.items ? (
            store.items
              .filter((item) => item.category === 'Seasonal Items')
              .map((item, index) => {
                return (
                  <div key={item._id} style={{ marginBottom: '35px' }}>
                    <ListItem
                      item={item}
                      title={item.title}
                      description={item.description}
                      price={item.price}
                    />
                  </div>
                );
              })
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default SeasonalItems;
