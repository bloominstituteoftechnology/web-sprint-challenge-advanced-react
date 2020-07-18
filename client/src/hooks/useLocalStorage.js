import { useState } from 'react';

export const useLocalStorage = (key, initialValue) => {
    const [values, setValues] = useState(() => {
        const checkoutValue = window.localStorage.getItem(key)
        return checkedValue ? JSON.parse(checkedValue) : initialValue;
    })

    const setStoredValue = (value) => {
        setValues(value);
        window.localStorage.setItem(key, JSON.stringify(value))
    }
    return [values, setStoredValue]
}