// write your custom hook here to control your checkout form
import React, { useState } from "react"

export const useForm = () => {
    const [showSuccessMessage, setShowSuccessMessage] = useState("");
    const [values, setValues] = useState("");

    const handleChanges = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
      };
      
      return [showSuccessMessage, setShowSuccessMessage, values, setValues, handleChanges]
}