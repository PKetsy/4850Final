import React, { useEffect } from 'react';
import ListItem from '../../../components/ListItem/ListItem';
import menuStore from '../../Admin/stores/menuStore';

import './Sales.css';

const Sales = () => {
  const store = menuStore();

  useEffect(() => {
    store.getMenuItems();
  }, []);

  return (
    <div className="container-popular">
      <h1 className="heading-secondary">
        <span>SALES</span>
      </h1>

      <div className="grid-container">
        <div>
          {store.items ? (
            store.items
              .filter((item) => item.category === 'Sales')
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
export default Sales;
