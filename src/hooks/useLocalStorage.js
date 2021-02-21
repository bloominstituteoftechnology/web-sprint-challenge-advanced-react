import { useState } from 'react'

export const useLocalStorage = (key, modeValue) => {
    const [value, setStateValue] = useState(() => {
        if(localStorage.getItem(key)) {
            return JSON.parse(localStorage.getItem(key))
        }
        else {
            localStorage.setItem(key, JSON.stringify(modeValue))
            return modeValue
        }
    });
    const setValue = (newValue) => {
        setStateValue(newValue);
        localStorage.setItem(key, JSON.stringify(newValue));
    }

    return [value , setValue];
}