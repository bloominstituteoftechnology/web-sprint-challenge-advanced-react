// write your custom hook here to control your checkout form
import { useState } from "react";

const initialValue = {
  firstName: "",
  lastName: "",
  address: "",
  city: "",
  state: "",
  zip: "",
};

export default function useForm() {
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [values, setValues] = useState("");
  const [newValues, setNewValues] = useState("");

  const handleChanges = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
    setNewValues({ ...values, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setShowSuccessMessage(true);
    setTimeout(function () {
      setValues(initialValue);
    }, 3000);
  };

  return [newValues, values, showSuccessMessage, handleChanges, handleSubmit];
}
