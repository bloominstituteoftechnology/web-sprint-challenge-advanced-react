import React, { useState } from "react";
import useLocalStorage from "./useLocalStorage";

const useForm = (initialValues) => {
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [values, setValues] = useLocalStorage("checkout", initialValues);

  const handleChanges = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowSuccessMessage(true);
  };
  return [values, showSuccessMessage, handleChanges, handleSubmit];
};
export default useForm;
