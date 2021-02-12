// write your custom hook here to control your checkout form
import { useState } from 'react';

const useForm = (initialValues) => {
    
    const [values, setValues] = useState(initialValues);
    const [showSuccessMessage, setShowSuccessMessage] = useState(false)
    const handleChanges = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
      };
      const handleSubmit = (e) => {
        e.preventDefault();
        setShowSuccessMessage(true);
      };
    
   
    
    return([values, handleChanges, handleSubmit, showSuccessMessage]) 
}
export default useForm