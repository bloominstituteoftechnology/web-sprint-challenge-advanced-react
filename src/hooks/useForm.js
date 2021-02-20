// write your custom hook here to control your checkout form
import {useState} from 'react';

export const useForm = (initialValues) => {
        const [values, setValues] = useState(initialValues)

        const handleChange = (e) => {
            setValues({ ...values})
        }

}