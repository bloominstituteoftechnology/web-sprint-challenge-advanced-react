// write your custom hook here to control your checkout form
import {useLocalStorage} from "./useLocalStorage"

export const useForm = (initialValue) => {
    const [values, setValues] = useLocalStorage("form-data", initialValue);

    const handleChanges = e => {
        setValues({
            ...values,[e.target.name]: e.target.value
        })
    };

    const handleSubmit = e => {
        e.preventDefault(); 
    };

    const clearForm = e => {
        e.preventDefault();
        setValues(initialValue)
    };

    return [values, handleChanges, handleSubmit, clearForm]

}
