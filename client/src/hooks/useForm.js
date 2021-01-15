// write your custom hook here to control your checkout form
import { useState } from "react";

const useLocalStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    if (localStorage.getItem(key)) {
      return JSON.parse(localStorage.getItem(key));
    }

    localStorage.setItem(key, initialValue);
    return initialValue;
  });

  const setValue = (value) => {
    setStoredValue(value);
    localStorage.setItem(key, value);
  };

  return [storedValue, setValue];
};

const useCheckoutState = (useInitialValues) => {
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [values, setValues] = useLocalStorage("form", useInitialValues);

  const handleChanges = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return [
    showSuccessMessage,
    setShowSuccessMessage,
    handleChanges,
    values,
    setValues,
  ];
};
export default useCheckoutState;
