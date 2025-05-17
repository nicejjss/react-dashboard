import React, { useContext } from 'react';
import './logo.css';
import logo from '../../assets/logo/logo.png';
import { MenuContext } from '../../Contexts';

function Logo() {
  const { isMenuOpen } = useContext(MenuContext);

  return (
    <div id="logo-link" className={`${!isMenuOpen ? "margin-lr-auto" : ''}`}>
      <img 
      src={logo} 
      alt="Dashboard" 
      className="dashboard-icon" 
    />
    <span id="logo-title" className={`${isMenuOpen ? "display-block" : "display-none"}`}>Dashboard</span>
    </div>
  );
}

export default Logo;