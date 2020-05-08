// write your custom hook here to control your checkout form
import { useState } from 'react';

const useForm = (initialValue) => {

  const [values, setValues] = useState(initialValue);

  const handleChange = (event) => {
//     event.persist();
    setValues({
          ...values, 
          [event.target.name]: event.target.value 
     });
  };
  
  const clearForm = e => {
    if (e) e.preventDefault();
    setValues(initialValue);
  };



  return [handleChange, clearForm, values]
};

export default useForm;