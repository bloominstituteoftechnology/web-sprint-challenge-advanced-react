import React, { useState } from "react";

const useForm = (initialValue)=>{
const [values, setValues] = useState(initialValue);
const [showSuccessMessage, setShowSuccessMessage] = useState(false);
const handleChanges = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
const handleSubmit = (e) => {
    e.preventDefault();
    setShowSuccessMessage(true);
    };
return [values, showSuccessMessage, handleChanges, handleSubmit]
}

export default  useForm;
