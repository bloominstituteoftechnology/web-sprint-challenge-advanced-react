// write your custom hook here to control your checkout form
import { useState,React }from 'react';

const useForm = (initialValue) => {
   const [ values, setValues ] = useState(() =>{
       return initialValue;
   });
   
const handleChanges = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

   return [values, handleChanges]
}
export default useForm;