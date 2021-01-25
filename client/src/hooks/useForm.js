// write your custom hook here to control your checkout form
import React, { useState } from "react";

const initialValue = {
  firstName: "",
  lastName: "",
  address: "",
  city: "",
  state: "",
  zip: "",
};

const useForm = () => {
  
    const [formValue, setFormValue] = useState(initialValue);
    const [message, setShowSuccessMessage] = useState(false);

   const handleChanges = (e) => {
      const newFormValue = { ...formValue, [e.target.name]: e.target.value };
      setFormValue(newFormValue);
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      setShowSuccessMessage(true);
    };

    return [message, formValue, handleChanges, handleSubmit ]
};

export default useForm;
