import React, { useState } from 'react';
import { useLightMode } from '../hooks/useLightmode';

const Lightbar = () => {
  const [darkMode, setDarkMode] = useLightMode(false);
  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };
  return (
    <nav className="navbar">
     
      <div className="dark-mode__toggle">
        <div
          onClick={toggleMode}
          className={darkMode ? 'toggle toggled' : 'toggle'}
        />
      </div>
    </nav>
  );
};

export default Lightbar;
