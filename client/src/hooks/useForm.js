// write your custom hook here to control your checkout form
import { useState } from "react";

export const useForm = (initialValue, submitLogic) => {
  const [values, setValues] = useState(initialValue);

  const handleChanges = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    submitLogic();
  };

  const clearForm = () => {
    setValues(initialValue);
  };

  return [values, handleChanges, handleSubmit, clearForm];
};
