// write your custom hook here to control your checkout form

import { useState } from "react";

function useForm(props) {
  const [showSuccess, setShowSuccess] = useState(false);
  const [values, setValues] = useState(props);

  const handleChanges = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setShowSuccess(true);
  };

  return [showSuccess, values, handleChanges, handleSubmit];
}
export default useForm;
