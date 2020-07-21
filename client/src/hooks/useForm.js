// write your custom hook here to control your checkout form
import { useState } from "react";

// should this be in CheckoutForm? works same, but should it be more easily visible?
const initialValue = {
  firstName: "",
  lastName: "",
  address: "",
  city: "",
  state: "",
  zip: "",
};

export const useForm = () => {
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [values, setValues] = useState(initialValue);

  const handleChanges = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowSuccessMessage(true);
  }

  return [values, showSuccessMessage, handleChanges, handleSubmit];
}