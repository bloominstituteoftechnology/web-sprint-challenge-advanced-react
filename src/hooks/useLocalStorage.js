import {useState} from 'react'


export const useLocalStorage =(key, initalValue) =>{
    const [value, setStateValue] = useState(()=>{
        if (localStorage.getItem(key)){
            return JSON.parse(localStorage.getItem(key));
        }
        else {
            localStorage.setItem(key, JSON.stringify(initalValue));
            return initalValue;
        }
    })
    const setValue = (newValue)=>{
        setStateValue(newValue);
        localStorage.setItem(key,JSON.stringify(newValue))

    }
    return [value, setValue]

}