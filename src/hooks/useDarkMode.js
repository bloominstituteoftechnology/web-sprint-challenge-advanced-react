import React, { useState } from 'react';


const useDarkMode = () => {
  const [darkMode, setDarkMode] = useState(true);
  
  return [darkMode, setDarkMode];
};

export default useDarkMode;