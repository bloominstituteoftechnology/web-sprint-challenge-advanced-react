// write your custom hook here to control your checkout form
import { useState } from 'react';

export const useForm = () => {
  const [state, setState] = useState({});

  const handleChanges = (e) => {
    e.persist();
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowSuccessMessage(true);
  };

  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  return [state, handleChanges, handleSubmit, showSuccessMessage]
}