// write your custom hook here to control your checkout form
import { useState } from "react";

export const useForm = (param, setShowSuccessMessage) => {
    const [form, setForm] = useState(param, false)
    
    const handleSubmit = (e) => {
      e.preventDefault();
      setShowSuccessMessage(true);
    };
    const handleChanges = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
      };

    return[form, handleChanges, handleSubmit]
}