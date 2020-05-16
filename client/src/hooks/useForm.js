// write your custom hook here to control your checkout form
import { useState, useEffect } from "react";

// const initialValue = {
//   firstName: "",
//   lastName: "",
//   address: "",
//   city: "",
//   state: "",
//   zip: "",
// };

export const useForm = (successBool) => {
  const [showSuccess, setShowSuccess] = useState(successBool);

  //   useEffect(() => {
  //     showSuccess ? true : false;
  //   }, [showSuccess]);
  return [showSuccess, setShowSuccess];
};
