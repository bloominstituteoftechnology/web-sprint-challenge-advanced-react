// write your custom hook here to control your checkout form
import { useState } from 'react'

const useForm = initialValue => {
    const [value,setValue] = useState(initialValue);

    const handleChanges = (e) => {
        setValue({ ...value, [e.target.name]: e.target.value });
      };
      const clearForm = e => {
        e.preventDefault();
        setValue(initialValue);
      };
    
      return[value,handleChanges,clearForm]
}

export default useForm;