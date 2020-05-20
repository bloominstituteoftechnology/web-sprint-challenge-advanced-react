// write your custom hook here to control your checkout form
import React, {useState} from 'react';

export const useForm = () => {
    const initialValues = {
        firstName: "",
        lastName: "",
        address: "",
        city: "",
        state: "",
        zip: ""
    };

    const [values, setValues] = useState(initialValues);

    const handlesValuesChange = (e) => {
        setValues(e.target.value);
    };

    const clearValues = () => {
        setValues("");
    };

    return [values, setValues, clearValues]
};
