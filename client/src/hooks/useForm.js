// Build out the logic needed for a form custom hook (see the useForm.js file)
// write your custom hook here to control your checkout form
import { useState } from "react"

const useForm = (initialValue) => {
  const [showSuccessMessage, setShowSuccessMessage] = useState(initialValue);
  const [values, setValues] = useState(initialValue)

const handleChanges = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowSuccessMessage(true);
  };

  return([values, showSuccessMessage, handleChanges, handleSubmit])
}
export default useForm;