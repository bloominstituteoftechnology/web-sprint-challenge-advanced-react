// write your custom hook here to control your checkout form
import { useState } from 'react'

export const useForm = (intValues, intMessage) => {

    const [values, setValues] = useState(intValues);
    const [message, setMessage] = useState(intMessage);


    // Handel Changes and Subit Events Below : 
    
    const handleChanges = e => {
        setValues({
            ...values, [e.target.name]: [e.target.value]
        });
    }

    const handleSubmit = event => {
        event.preventDefault();
        setMessage(true);
    }

    return [values, message, handleChanges, handleSubmit];

};