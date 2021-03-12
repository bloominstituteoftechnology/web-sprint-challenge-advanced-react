// write your custom hook here to control your checkout form
import { useState } from 'react';

const useForm = (initialValues) => {
  const [showSuccessMessage, setShowSuccessMessage] = useState(initialValues.setShowSuccessMessage);
  const [values, setValues] = useState(initialValues.values);

  const handleChanges = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowSuccessMessage(true);
  };

  return [showSuccessMessage, handleChanges, handleSubmit]
}

export default useForm;