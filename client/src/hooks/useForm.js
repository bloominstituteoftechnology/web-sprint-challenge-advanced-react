// write your custom hook here to control your checkout form
import { useState } from 'react'

export const useForm = (initialValue) => {

    const [values, setValues] = useState(initialValue);
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);


    // Handel Changes and Subit Events Below : 
    
    const handleChanges = e => {
        setValues({
            ...values, [e.target.name]: [e.target.value]
        });
    }

    const handleSubmit = event => {
        event.preventDefault();
        setShowSuccessMessage(true);
    }

    return [values, showSuccessMessage, handleChanges, handleSubmit];

};