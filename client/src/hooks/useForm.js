// write your custom hook here to control your checkout form
import { useState } from "react";

export const useForm = (values, successBool) => {
  const [showSuccess, setShowSuccess] = useState(successBool);
  const [formValues, setFormValues] = useState(values);

  return [showSuccess, setShowSuccess], [formValues, setFormValues];
};
