import React, { useContext } from 'react';
import './Header.css';
import Logo from '../logo/Logo';
import Nav from '../navigation/Nav';
import Update from '../update/Update';
import Infor from '../infor/Infor';
import { MenuContext } from '../../Contexts';

const Header = ({ width, setMenuOpen }) => {
  const { isMenuOpen, setIsMenuOpen } = useContext(MenuContext);

  return (
    <header 
      id="header"
      onMouseEnter={() => setIsMenuOpen(true)}
      className={`${isMenuOpen ? "header-open" : "header-close"}`}
      style={{ width: width }}
      onClick={() => setMenuOpen(true)}>
      <Logo/>
      <Nav/>
      {isMenuOpen ? <Update/> : null}
      <Infor/>
    </header>
  );
};

export default Header; 