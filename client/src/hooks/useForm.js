// write your custom hook here to control your checkout forms
//all stateful logic
import React, { useState } from "react";
//local storage hook
const useLocalStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    if (localStorage.getItem(key)) {
      return JSON.parse(localStorage.getItem(key));
    } else {
      localStorage.setItem(key, JSON.stringify(initialValue));
    }
    return initialValue;
  });  
  const setValue = (value) => {
    setStoredValue(value);
    localStorage.setItem(key, JSON.stringify(value));
  };
  return [storedValue, setValue];  
};
const useForm = (initialValue) => {
  const [values, setValues] = useLocalStorage("form", initialValue);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const handleChanges = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setShowSuccessMessage(true);
  };
  return [values, handleChanges, handleSubmit, showSuccessMessage];
};
export default useForm;
