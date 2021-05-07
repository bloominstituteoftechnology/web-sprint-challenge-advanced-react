// write your custom hook here to control your checkout form
import { useState } from 'react';

const useForm = (initialValues) => {
    const [values, setValues] = useState(initialValues);

    const handleChanges = evt => {
        setValues({
            ...values, [evt.target.name]:evt.target.value
        });
    };

    return([values, handleChanges]);
}

export default useForm;