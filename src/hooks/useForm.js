import { useLocalStorage } from './useLocalStorage';

export const useForm = initialValue => {

    const [values, setValues] = useLocalStorage('form values', initialValue);

    const handleChanges = (e) => {
        setValues({ 
        ...values, 
        [e.target.name]: e.target.value });
      };

    return [values, handleChanges]
}