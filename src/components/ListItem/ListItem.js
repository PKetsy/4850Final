import React from 'react';
import './ListItem.css';

const ListItem = ({ title, description, price }) => {
  return (
    <div className="list-items">
      <ul>
        <li>
          <div>
            <h3>{title}</h3>
            {description && (
              <p className="list-items-description">{description}</p>
            )}
          </div>
          <h3>${price}</h3>
        </li>
      </ul>
    </div>
  );
};

export default ListItem;
