import React, { useState } from 'react';

//setup state properly
//capture the values from the form events
//if localStorage data, use that. otherwise use initialValues
//update localStorage when needed

export const useLocalStorage = (initialValue, key) => {
    const [storedValue, setStoredValue] = useState(() => {
        if (window.localStorage.getItem(key)) {
            return JSON.parse(window.localStorage.getItem(key));
        }
        window.localStorage.setItem(key, JSON.stringify(initialValue));
        return initialValue;
    });

    const setValue = value => {
        setStoredValue(value);
        window.localStorage.setItem(key, JSON.stringify(value));
    };
    return [storedValue, setValue];
};

//should work almost exactly like useState,
//but any value that is controlled by this hook will be saved and persisted to localStorage