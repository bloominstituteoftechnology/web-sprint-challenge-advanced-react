import {useState, useEffect} from 'react';

const useLocalStorage = (key,initialValue) => {
    const [storedValue, setStoredValue] = useState(() => {
        const item = window.localStorage.getItem(key);
        return item ? JSON.parse(item) : initialValue;
    });
    const setValue = value => {
        setStoredValue(value);
        window.localStorage.setItem(key, JSON.stringify(value));
    }

    return [storedValue,setValue];
}


export const useDarkMode = ()=>{
    const [mode,setMode] = useLocalStorage('dark',false)

    useEffect(()=>{
        mode ? document.body.classList.remove("dark-mode") : document.body.classList.add("dark-mode");
        mode ? document.querySelector(".dark-mode__toggle").classList.remove("dark-mode__toggle-on") :
            document.querySelector(".dark-mode__toggle").classList.add("dark-mode__toggle-on");
    },[mode]);



    return [mode,setMode];
}