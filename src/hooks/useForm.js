// write your custom hook here to control your checkout form
import { useState} from 'react';

export const useForm = (initialValues) => {
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const [values, setValues ] = useState(initialValues);

    const handleChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        });
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(values);
        setShowSuccessMessage(true);
    }
    return [ values, handleChange, handleSubmit, showSuccessMessage ]
}

export default useForm;