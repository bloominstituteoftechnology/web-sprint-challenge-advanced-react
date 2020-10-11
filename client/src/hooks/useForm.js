// write your custom hook here to control your checkout form

import { useState } from "react"

export function useForm(key,initialValues){


    const[values,setValues]= useState(key,initialValues);
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);

    const handleChanges = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        setShowSuccessMessage(true);
        console.log('form submitted and data is ',values)
      };


    return [values,handleChanges,showSuccessMessage,handleSubmit]

}