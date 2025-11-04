import React from 'react';
import DropdownItem from '../DropdownItem/DropdownItem.js';
import './DropdownList.css';

const DropdownList = ({ items, selectedItem, onItemSelect }) => {
  return (
    <div className="dropdown-list">
      {items.map((item, index) => (
        <DropdownItem
          key={index}
          item={item}
          isSelected={selectedItem && selectedItem.value === item.value}
          onSelect={onItemSelect}
        />
      ))}
    </div>
  );
};

export default DropdownList;