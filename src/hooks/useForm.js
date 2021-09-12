// write your custom hook here to control your checkout form
import { useState} from 'react';

export const useForm = (initialState) => {
    const [values, setValues] = useState(initialState);
    const handleChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        });
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(values);
    }
    return {
        values,
        handleChange,
        handleSubmit
    }
}

