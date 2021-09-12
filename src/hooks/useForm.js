import { useState } from 'react';


const useForm = (initialValue) => {
    const [values, setValues] = useState(initialValue)      // Universal variables 'value'
    const [booleanValue, setBooleanValue] = useState(false) // I could have added a bool key to the initialValue object most likely then I would have only needed 1 state/object.

    const handleChanges = (e) => {
        setValues({ ...values, [e.target.name] : e.target.value });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        setBooleanValue(true);
      };

    return [values, booleanValue, handleChanges, handleSubmit];
}

export default useForm;