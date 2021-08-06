// write your custom hook here to control your checkout form
import { useState } from 'react';
const useForm = (initialValue) => {
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const [values, setValues] = useState(initialValue);

    const handleChanges = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setShowSuccessMessage(true);
    };
    return [handleChanges, handleSubmit, values, showSuccessMessage]//I think order matters and needs to be consistent between compoenents. 
}

export default useForm;