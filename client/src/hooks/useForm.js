import React from 'react';
import useLocalStorage from './useLocalStorage'
//passing in hook logic 


const useForm =  (key, initialValue) => {
    const [data, setData] = useLocalStorage(key, initialValue);

    const handleChanges = event => {
        setData({...data, [event.target.name]: event.target.value})
        //will handle form changes
    }
    return [data, handleChanges];
}

export default useForm;