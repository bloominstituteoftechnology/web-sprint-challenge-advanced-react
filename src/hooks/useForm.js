// write your custom hook here to control your checkout form
import { useState } from "react";

const useForm = (key, initialValue) => {
    const [values, setValues] = useState(() => {
        if (window.localStorage.getItem(key)){
            return JSON.parse(window.localStorage.getItem(key));
        }
        return initialValue;
    });

    const updateValue = newValue => {
        setValues(newValue);
        window.localStorage.setItem(key, JSON.stringify(newValue))
    }
    // DB previous:
    // return [value, updateValue];
    return [values, updateValue];
};
export default useForm;
