import { useState } from "react";

export const useForm = (initialValues, cb) => {
  const [values, setValues] = useState({});

  const handleChanges = (e) => {
    // console.log(initialValues);
    // console.log(e.target.name);
    // console.log(e.target.value);
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    console.log(e);
    if (e) e.preventDefault();
    cb();
  };

  const clearForm = (e) => {
    e.preventDefault();
    setValues(initialValues);
  };

  return [values, handleChanges, handleSubmit, clearForm];
};
