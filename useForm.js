
import { useState } from "react";


export const useForm = (key, initialValues) => {
  const [values, setValues] = useState(key, initialValues);


  const handleChanges = e => {
    
    setValues({
      ...values,
      [e.target.name]: e.target.value
    });
  };



  return [values, handleChanges];
};
