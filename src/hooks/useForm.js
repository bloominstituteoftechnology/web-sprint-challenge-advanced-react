import { useLocalStorage } from './useLocalStorage';

export const useForm = initialValues => {

    const [values, setValues] = useLocalStorage('form values', initialValues);

    const handleChanges = evt => {
        setValues({
            ...values,
            [evt.target.name]: evt.target.value
        })
    }

    const clearForm = evt => {
        evt.preventDefault();
        setValues(initialValues);
    }

    return [values, handleChanges, clearForm]
}