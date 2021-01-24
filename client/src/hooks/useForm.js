// write your custom hook here to control your checkout form
import React,{useState} from "React"
import {useLocalStorage} from './useLocalStorage'

export const useForm = (key,initialValues) =>{

    const [values, setValues] = useLocalStorage(key, initialValues)

    const handleChanges = (e) => {
        console.log("handleChanges",e.target.name)
        setValues({ ...values, 
            [e.target.name]: e.target.value });
      };
    
      return[values,handleChanges]
}