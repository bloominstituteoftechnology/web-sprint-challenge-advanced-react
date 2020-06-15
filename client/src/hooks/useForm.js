// write your custom hook here to control your checkout form

import { useState } from "react";

const useForm = (cb) => {

    const initialValue = {
        firstName: "",
        lastName: "",
        address: "",
        city: "",
        state: "",
        zip: "",
      };

    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const [values, setValues] = useState(initialValue);

    const handleChanges = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        cb();
      };

      return {
        handleChanges,
        handleSubmit,
        values,
        showSuccessMessage
      }

}

export default useForm;