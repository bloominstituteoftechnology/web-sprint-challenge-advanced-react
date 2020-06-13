import React, { useState } from 'react';
import { useLightMode } from '../hooks/useLightmode';

const Lightbar = () => {
  const [LightMode, setLightMode] = useLightMode(false);
  const toggleMode = e => {
    e.preventDefault();
    setLightMode(!LightMode);
  };
  return (
    <nav className="navbar">
     
      <div className="dark-mode__toggle">
        <div
          onClick={toggleMode}
          className={LightMode ? 'toggle toggled' : 'toggle'}
        />
      </div>
    </nav>
  );
};

export default Lightbar;
