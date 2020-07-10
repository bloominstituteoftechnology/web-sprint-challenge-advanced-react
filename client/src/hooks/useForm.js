// write your custom hook here to control your checkout form
import { useState } from 'react'

export const useForm = (initialForm) => {
    const [values, setValues] = useState(initialForm);

    const handleChanges = e => {
      setValues({ ...values, 
        [e.target.name]: e.target.value });
    };
  
    return [values, handleChanges]
}