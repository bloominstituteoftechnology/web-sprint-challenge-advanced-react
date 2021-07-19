// write your custom hook here to control your checkout form
import { useState } from "react";
// import the initial value from it's parent component
import { initialValue } from "../components/CheckoutForm";

export const useForm = () => {
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [values, setValues] = useState(initialValue);

  const handleChanges = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowSuccessMessage(true);
  };

  // return all values that our form may need (similar as passing props)
  return [values, handleSubmit, handleChanges, showSuccessMessage];
};
