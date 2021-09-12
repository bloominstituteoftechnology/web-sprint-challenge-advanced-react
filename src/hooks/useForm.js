// write your custom hook here to control your checkout form
import { useState } from "react";

export const useForm = (param) => {
    const [form, setForm] = useState(param, false)
    

    const handleChanges = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
      };

    return([form, handleChanges])
}