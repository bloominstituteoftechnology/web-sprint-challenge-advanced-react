import { useState } from "react";

// write your custom hook here to control your checkout form
const useForm = (props) => {
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const [values, setValues] = useState(props);

        const handleChanges = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
        };

        const handleSubmit = (e) => {
            e.preventDefault();
            setShowSuccessMessage(true);
        };

    return ([values, handleChanges, handleSubmit, showSuccessMessage]);
  }

  export default useForm;