// write your custom hook here to control your checkout form
import { useState } from 'react';

const useForm = (initialValue) => {
    const [value, setValue] = useState(initialValue);
    // was set to initialValue, 
    // in review he changed to initValue -does this matter ????

    const handleChanges = (e) => {
        setValue({ 
            ...value, 
            [e.target.name]: e.target.value,
        });
      };    

    // can't get clear working ???  
    //   const clear = () => {
    //       setValues(initialValue);
    //   };

    return [value, handleChanges];
    //return [values, handleChanges, clear];

};

export default useForm;