// write your custom hook here to control your checkout form
import { useState } from 'react';

export const useForm = (initialValues) => {
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [state, setState] = useState(initialValues);

  const handleChanges = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowSuccessMessage(true);
  };

  return [state, handleSubmit, handleChanges, showSuccessMessage];
};
