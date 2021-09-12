// write your custom hook here to control your checkout form
import { useState} from 'react';

export const useForm = (initialState) => {
    const [value, setValue] = useState(initialState);
    const handleChange = (e) => {
        setValue({
            ...value,
            [e.target.name]: e.target.value
        });
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(value);
    }
    return {
        value,
        handleChange,
        handleSubmit
    }
}