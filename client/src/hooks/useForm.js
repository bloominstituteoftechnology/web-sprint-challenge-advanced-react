// write your custom hook here to control your checkout form
import { useState } from 'react';

export const useForm = (initialValue, bool) => {
    const [values, setValues] = useState(initialValue);
    const [showSuccessMessage, setShowSuccessMessage] = useState(bool);

    const handleChange = event => {
        setValues({
            ...values,
            [event.target.name]: event.target.value
        })
    }

    const handleSubmit = event => {
        event.preventDefault();
        setShowSuccessMessage(true);
    }

    return [values, showSuccessMessage, handleChange, handleSubmit];
}