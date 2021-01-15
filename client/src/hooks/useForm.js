// write your custom hook here to control your checkout form
import { useState } from "react";

// export const useLocalStorage = (key, initialValue) => {
//   const [storedValue, setStoredValue] = useState(() => {
//     const item = localStorage.getItem(key);
//     // console.log(item);
//     // console.log(JSON.parse(item));
//     // console.log(initialValue);
//     // return item ? JSON.parse(item) : initialValue;
//     return item;
//     // localStorage.setItem(key, initialValue);
//     // return initialValue;
//   });

//   const setValue = (value) => {
//     setStoredValue(value);
//     localStorage.setItem(key, JSON.stringify(value));
//   };

//   return [storedValue, setValue];
// };

const useForm = (useInitialValues) => {
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [values, setValues] = useState(useInitialValues);

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
