// write your custom hook here to control your checkout form
import { useEffect, useState } from "react";

const useForm = (initialValue) => {
<<<<<<< HEAD
    const [values, setValue] = useState(initialValue);
    const handleChanges = (e) => {
        setValues({
            ...values, [e.target.name]: e.target.value
        });
    };
    return [values, handleChanges]
};
export default useForm;
=======
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
>>>>>>> c97921a1bc16ba6bd3b3849fa793dca0665d7842
