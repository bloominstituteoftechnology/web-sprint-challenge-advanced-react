// write your custom hook here to control your checkout form
import { useEffect, useState } from "react";

const initialValue = {
  firstName: "",
  lastName: "",
  address: "",
  city: "",
  state: "",
  zip: "",
};

const useForm = () => {
  const [values, setValues] = useState(initialValue);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  useEffect(() => {
    const handleChanges = (e) => {
      setValues({ ...values, [e.target.name]: e.target.value });

      const handleSubmit = (e) => {
        e.preventDefault();
        setShowSuccessMessage(true);
      };
    };
    return [values, setValues, handleChanges];
  });
};
export default useForm;

//     const handleSubmit = (e) => {
//       e.preventDefault();
//       setShowSuccessMessage(true);
//     };
