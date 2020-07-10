// write your custom hook here to control your checkout form
import { useLocalStorage } from './useLocalStorage';

export const useForm = (initialValue, key) => {
    const [values, setValues] = useLocalStorage(initialValue, key);
    const handleChanges = e => {
        console.log(e.target.name, e.target.value);
        setValues({
            ...values,
            [e.target.name]: e.target.value
        });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        alert(values.firstName, values.lastName);
   };
   return [values, handleSubmit, handleChanges];
};