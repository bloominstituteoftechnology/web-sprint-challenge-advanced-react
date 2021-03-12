// write your custom hook here to control your checkout form
import { useState } from "react";

const initialValues = {
  firstName: "",
  lastName: "",
  address: "",
  city: "",
  state: "",
  zip: "",
};

const useForm = () => {
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [values, setValue] = useState(initialValues);

  const handleChanges = (e) => {
    setValue({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowSuccessMessage(true);
  };

  return [handleSubmit, handleChanges, showSuccessMessage, values];
};
export default useForm;
