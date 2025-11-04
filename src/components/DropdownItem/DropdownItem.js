import React from 'react';
import './DropdownItem.css';

const DropdownItem = ({ item, isSelected, onSelect }) => {
  const handleClick = () => {
    onSelect(item);
  };

  const itemStyle = {
    backgroundColor: isSelected ? '#e3f2fd' : 'transparent',
    color: isSelected ? '#1976d2' : '#333',
    fontWeight: isSelected ? '600' : 'normal'
  };

  return (
    <div
      className="dropdown-item"
      style={itemStyle}
      onClick={handleClick}
    >
      {item.label}
    </div>
  );
};

export default DropdownItem;