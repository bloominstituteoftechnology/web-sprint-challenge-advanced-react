// write your custom hook here to control your checkout form
import React, {useState, useEffect} from 'react'


const useForm = (initialValue) => {
    const [showSuccessMessage, setShowSuccessMessage] = useState();
    const [values, setValues] = useState(initialValue);
  
    const handleChanges = (e) => {
      setValues({ ...values, [e.target.name]: e.target.value });
    };
  
    const handleSubmit = (e) => {
        e.preventDefault();
        setShowSuccessMessage(true);
      };
    
      return [showSuccessMessage, values, handleChanges, handleSubmit]
}

export default useForm;