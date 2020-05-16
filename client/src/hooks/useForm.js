// write your custom hook here to control your checkout form
import { useState } from "react";

export const useForm = (initialValue) => {
  const [values, setValues] = useState(initialValue);
  const [logic, setLogic] = useState(false);

  const handleChanges = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLogic(true);
    setValues(initialValue);
  };

  return [values, handleChanges, logic, handleSubmit];
};
