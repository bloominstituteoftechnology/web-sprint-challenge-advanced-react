// write your custom hook here to control your checkout form
import { useState } from 'react';
import { useLocalStorage } from "./useLocalStorage";

export const useForm = (key, initialValue) => {

    const [values, setValues] = useLocalStorage(key, initialValue);




    const handleChanges = (e) => {
        setValues({ 
            ...values, 
            [e.target.name]: e.target.value 
        });
    };

    return [values, handleChanges]
}