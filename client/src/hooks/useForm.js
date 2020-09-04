import { useState } from 'react'

const useForm = (initialValue) => {

  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [values, setValues] = useState(initialValue);

  const handleChanges = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowSuccessMessage(true);
  };

  return [showSuccessMessage, setShowSuccessMessage, values, setValues, handleSubmit, handleChanges]
}

export default useForm