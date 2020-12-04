// write your custom hook here to control your checkout form
import {useState} from 'react';


const useForm = (key, initValue) => {

    const useLocalStorage = (key, initValue) => {
            const [value, setStoredValue] = useState(() => {
            (localStorage.getItem(key)) ? JSON.parse(localStorage.getItem(key)) : localStorage.setItem(key, JSON.stringify(initValue));

                return initValue;
            })
            
            const setValue = (newValue) => {
            setStoredValue(newValue);
            localStorage.setItem(key, JSON.stringify(newValue));
            };
            return [value, setValue];
        };
      
    const [values, setValues] = useLocalStorage(key, initValue);

    const handleChanges = (event) => {
      setValues({
        ...values,
        [event.target.name]: event.target.value,
      });
    };
    const newForm = () => {
      setValues(initValue);
    };

    return [values, handleChanges, newForm];
  };

export default useForm