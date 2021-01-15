// write your custom hook here to control your checkout form
import React, {useState} from 'react';

export const useForm = (e) => {
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const [values, setValues] = useState("");
    

    const handleChanges = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
      };

      const handleSubmit = (e) => {
        e.preventDefault();
        setShowSuccessMessage(true);
      };
      return [values, setValues, handleChanges, handleSubmit, showSuccessMessage, setShowSuccessMessage]
    
}