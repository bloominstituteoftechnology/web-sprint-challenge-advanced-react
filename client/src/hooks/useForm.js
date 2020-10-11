// write your custom hook here to control your checkout form
import {useState} from 'react';
export const useForm=(initialValue)=>{
    const [values, setValues] = useState(initialValue);
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);

    const handleChanges = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
      };
      const handleSubmit = (e) => {
        e.preventDefault();
        setShowSuccessMessage(true);
    };
      return[values,setValues,handleChanges,showSuccessMessage,handleSubmit];

}