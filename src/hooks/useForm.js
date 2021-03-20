// write your custom hook here to control your checkout form
import { useState } from 'react';

export const useForm = ( key, initialValue ) => {
    const [ value, setValue ] = useLocalStorage(key, initialValue);
    const handleChanges = updatedValue => {
        setValue(updatedValue)
    }
    return [ value, setValue, handleChanges ];
};

const useLocalStorage = (key, initialValue) => {
    const [ storedValue, setStoredValue ] = useState(() => {
        const item = window.localStorage.getItem(key);
        return item ? JSON.parse(item) : initialValue;
    });
    const setValue = value => {
        setStoredValue(value);
        window.localStorage.setItem(key, JSON.stringify(value));
    };
    return [ storedValue, setValue ]
};