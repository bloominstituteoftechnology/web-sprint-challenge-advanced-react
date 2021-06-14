// write your custom hook here to control your checkout form
import react, { useState } from 'react';

const useForm = (initialValue) => {
 const [showSuccessMessage, setShowSuccessMessage] = useState(false);
 const [values, setValues] = useState(initialValue);

 const handleChanges = (e) => {
   setValues({ ...values, [e.target.name]: e.target.value });
 };

 const handleSubmit = (e) => {
   e.preventDefault();
   console.log('submit');
   setShowSuccessMessage(true);
 };
 
   return [values, handleSubmit, handleChanges, showSuccessMessage];
 };
 
 export default useForm;
