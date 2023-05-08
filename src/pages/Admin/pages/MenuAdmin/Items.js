import React, { useEffect } from 'react';
import menuStore from '../../stores/menuStore';
import Item from './Item';

export default function Items() {
  const store = menuStore();

  useEffect(() => {
    store.getMenuItems();
  }, []);

  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Menu Items:</h1>
      {store.items ? (
        store.items.map((item) => {
          // Check if item exists and has a valid _id property
          if (item && item._id) {
            return (
              <div key={item._id} style={{ marginBottom: '35px' }}>
                <Item item={item} />
              </div>
            );
          }
          return null;
        })
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
