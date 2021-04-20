// write your custom hook here to control your checkout form
import { useState } from "react";

/*const useForm = (key, initialValue) => {
    const [values, setValues] = useState(() => {
        if (window.localStorage.getItem(key)){
            return JSON.parse(window.localStorage.getItem(key));
        }
        return initialValue;
    });

    const updateValue = newValue => {
       setValues(newValue);
        window.localStorage.setItem(key, JSON.stringify(newValue)) //This is the local storage bit that I don't need if I don't need to be working with local storage
    }
    // DB previous:
    // return [value, updateValue];
    return [values, updateValue];
};
export default useForm;*/

//Here's how I'm doing this without using LocalStorage
export const useForm = initialValue => {
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const [values, setValues] = useState(initialValue);

    const updateValues = newValue => {
        setValues(newValue);
    }

    return [showSuccessMessage, setShowSuccessMessage, values, updateValues]
};



