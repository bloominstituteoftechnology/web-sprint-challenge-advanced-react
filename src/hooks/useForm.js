import { useLocalStorage } from './useLocalStorage';

export const useForm = initialValue => {

    const [values, setValues] = useLocalStorage('form values', initialValue);

    return [values]
}