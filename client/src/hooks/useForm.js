// write your custom hook here to control your checkout form
import { useState } from 'react';

const initialValue = {
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    state: "",
    zip: "",
  };

export const useForm = _ => {
    const [values, setValues] = useState(initialValue);
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    

    const handleChanges = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    };

    return [values, setValues, showSuccessMessage, setShowSuccessMessage, handleChanges];

}