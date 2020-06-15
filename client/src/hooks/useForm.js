// write your custom hook here to control your checkout form
import { useLocalStorage } from "./useLocalStorage";

export const useForm = (initialValues, key) => { 
    //set
    const [values, setValues] = useLocalStorage(initialValues, key);
    const [showSuccessMessage, setShowSuccessMessage] = useLocalStorage('Success', false)

    //changehandle
    const handleChanges = e => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        });
    };
    //submit
    const handleSubmit = e => {
        e.preventDefault();
        setShowSuccessMessage(true);
        };
        
    //return
    return [values, handleChanges, handleSubmit, showSuccessMessage];
}