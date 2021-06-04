// write your custom hook here to control your checkout form

/*
Checkout Form
The form is working, but it is currently controlled by local stateful logic. We want to control this form with a custom hook.

 Build a custom hook called useForm, and use it in your CheckoutForm component to control the form's stateful logic.
 You built a useForm hook in the guided project this week. You will probably need to use that as a guide to complete this step. However, try and build it out first before you peek at the guided project. And do not copy/paste directly from the guided project!_
*/

import { useState } from "react";

const useForm = (props) => {
  const [showSuccess, setShowSuccess] = useState(false);
  const [values, setValues] = useState(props);

  const handleChanges = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setShowSuccess(true);
  };

  return [showSuccess, values, handleChanges, handleSubmit];
};

export default useForm;
