// write your custom hook here to control your checkout form
import {useState} from 'react';
const useForm = (initalValues) =>{
    const [values, setValues] = useState(initalValues);
    const handleChanges = event =>{
        setValues({
            ...values,[event.target.name]:event.target.value
        });
    }
    return ([values, handleChanges]);
}
export default useForm;