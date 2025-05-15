import React from 'react';
import './logo.css';
import logo from '../../assets/logo/logo.png';

function Logo() {
  return (
    <div id="logo">
      <img 
      src={logo} 
      alt="Dashboard" 
      className="dashboard-icon"
    />
      <span id="logo-title" className="visible">Dashboard</span>
    </div>
  );
}

export default Logo;