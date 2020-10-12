import { useState } from 'react';

export const useFormInput = (initialValue) => {
  const [values, setValues] = useState(initialValue);

  const handleChanges = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const resetForm = () => {
    setValues(initialValue);
  };

  return [values, handleChanges, resetForm];
};
