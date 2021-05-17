import { useState } from 'react';

const useLocalStorage = (key, initialValue) => {
  const [value, setStoredValue] = useState(() => {
    if (window.localStorage.getItem(key)) {
      return JSON.parse(window.localStorage.getItem(key));
    }
    return initialValue;
  });

  const setValue = (value) => {
    setStoredValue(value);
    window.localStorage.setItem(key, JSON.stringify(value));
  };

  return [value, setValue];
};

export default useLocalStorage;
