import React, {useEffect}from 'react'
import {useLocalStorage} from './useLocalStorage'

export const useLightMode = (initialValues) => {
    const [values, setValues] = useLocalStorage(initialValues);
    const query = document.querySelector('body')
    useEffect(()=>{
        if(values){query.classList.add('dark-mode')}
        else{query.classList.remove('dark-mode')}
    },[values]
    )
    return [values,setValues]
}
