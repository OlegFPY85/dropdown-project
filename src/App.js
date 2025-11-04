import React from 'react';
import Dropdown from './components/Dropdown/Dropdown.js';
import './App.css';

const App = () => {
  const dropdownItems = [
    { value: 'profile', label: 'Profile Information' },
    { value: 'password', label: 'Change Password' },
    { value: 'pro', label: 'Become PRO' },
    { value: 'help', label: 'Help' },
    { value: 'logout', label: 'Log Out' }
  ];

  return (
    <div className="app">
      <div className="app-container">
        <h1>Account Settings</h1>
        <Dropdown items={dropdownItems} />
      </div>
    </div>
  );
};

export default App;