import React, {useState} from 'react';

export const useLocalStorage = (key,initialValues) =>{
    const [storedValue, setStoredValue] = useState(() => {
        const localVar = window.localStorage.getItem(key)
        return localVar ? JSON.parse(localVar):initialValues
        });
      
        const setValues = (values) => {
          setStoredValue(values);
          window.localStorage.setItem(key, JSON.stringify(values));
        };
      
        return [storedValue, setValues];
}
