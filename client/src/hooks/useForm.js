// write your custom hook here to control your checkout form
import {useState} from 'react';

const useForm = () => {
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const initialValue = {
        firstName: "",
        lastName: "",
        address: "",
        city: "",
        state: "",
        zip: "",
    };
    const [values, setValues] = useState(initialValue); 

    const handleSubmit = (e) => {
        e.preventDefault();
        setShowSuccessMessage(true);
    };

    const handleChanges = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    };

    return [handleChanges, handleSubmit, values, showSuccessMessage]
}

export default useForm