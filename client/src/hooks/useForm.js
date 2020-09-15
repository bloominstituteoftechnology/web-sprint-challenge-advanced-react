// write your custom hook here to control your checkout form
import { useEffect, useState } from "react";

const useForm = (initialValue) => {
  const [values, setValues] = useState(initialValue);
  // const [showSuccessMessage, setShowSuccessMessage] = useState(true);

  const handleChanges = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  // const handleSubmit = (e) => {
  //   if (e) e.preventDefault();
  //   setShowSuccessMessage();
  // };
  return [
    values,
    //  showSuccessMessage, handleSubmit,
    handleChanges,
  ];
};
export default useForm;
