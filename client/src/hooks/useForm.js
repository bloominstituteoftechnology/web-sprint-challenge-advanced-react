// write your custom hook here to control your checkout form
import { useState } from 'react'; 

export const useForm = (initialValue) => {
    // set form values into state 
    const [formValues, setValues] = useState(initialValue); 

    // handle changes 
    const handleChanges = e => {
        const { name, value } = e.target; 
        setValues({
            ...formValues, 
            [name]: value
        });
    };

    // return array
    return [formValues, handleChanges]
}