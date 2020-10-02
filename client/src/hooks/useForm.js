import React from 'react';
import useLocalStorage from './useLocalStorage'

const useForm = (key, initialValue) => {
    const [data, setData] = useLocalStorage(key, initialValue);

    const handleChanges = event => {
        setData({...data, [event.target.name]: event.target.value})
    }

    return [data, handleChanges];
}

export default useForm;