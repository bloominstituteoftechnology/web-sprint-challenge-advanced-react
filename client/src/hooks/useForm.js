// write your custom hook here to control your checkout form
import { useLocalStorage } from './useLocalStorage'
import React, { useState } from "react"



 const  useForm = (key,initialValue) => {
    const [valuesStorage, setValuesStorage] = useLocalStorage(key, initialValue);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [values, setValues] = useState(initialValue);

  const handleChanges = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
    
  };

  const handleSubmit = (e) => {
    setValuesStorage({...values, [values.name]: values.value})
    e.preventDefault();
    setShowSuccessMessage(true);
    // submitCall();
  };
  
    return [showSuccessMessage, values, valuesStorage, handleChanges, handleSubmit];
  };
  export default useForm