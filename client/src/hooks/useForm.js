// write your custom hook here to control your checkout form
import React, { useState } from "react";



const useForm = (initialFormValue, initialMessageValue) => {
  //declare 2 states required for Form states
  const [formValue, setFormValue] = useState(initialFormValue);
  const [message, setShowSuccessMessage] = useState(initialMessageValue);

  // handles changes when there is a change to any form input
  const handleChanges = (e) => {
    const newFormValue = { ...formValue, [e.target.name]: e.target.value };
    setFormValue(newFormValue);
  };

  //handles submit when the button is click and sets message value to "true"
  const handleSubmit = (e) => {
    e.preventDefault();
    setShowSuccessMessage(true);
  };

  return [message, formValue, handleChanges, handleSubmit];
};

export default useForm;
