import React from 'react';
import Header from './components/header/Header';
import Content from './components/content/Content';
import './App.css';
import { useState } from 'react';
import { MenuContext } from './Contexts';

const menuWidth = 20;
const menuCloseWidth = 3.5;

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(true);

  return (
    <MenuContext.Provider value={{ isMenuOpen, setIsMenuOpen }}>
      <div className="app" id="main">
        <Header width={isMenuOpen ? menuWidth + "vw" : menuCloseWidth + "vw"} setMenuOpen={setIsMenuOpen}/>
        <Content marginLeft={isMenuOpen ? menuWidth + "vw" : menuCloseWidth + "vw"} setMenuOpen={setIsMenuOpen}/>
      </div>
    </MenuContext.Provider>
  );
}

export default App;
