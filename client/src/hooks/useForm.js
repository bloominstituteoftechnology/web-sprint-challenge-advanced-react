// write your custom hook here to control your checkout form
import React, { useState } from 'react';

const useForm = (initialValue) => {
    const [formValue, setFormValue] = useState("form", initialValue);

    const handleChanges = e => {
        setFormValue({
            ...formValue,
            [e.target.name]:e.target.value
        })
    }

    const clearForm = e => {
        e.preventDefault();
        setFormValue(initialValue);
    };

    return([formValue, handleChanges, clearForm]);
}

export default useForm;
