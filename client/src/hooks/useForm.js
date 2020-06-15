// write your custom hook here to control your checkout form
import { checkoutForm } from "../components/CheckoutForm";
import { useState} from "react";

export const useForm = (key, initialValue) => {
  const [values, setValues] = useLocalStorage();


  const CheckoutForm = (props) => {
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const [values, setValues] = useState(initialValue);
  
    const handleChanges = (e) => {
      setValues({ ...values, [e.target.name]: e.target.value });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      setShowSuccessMessage(true);
    };
  

//   useEffect(() => {
//     if (values === true) {
//       document.body.classList.add("dark-mode");
//     } else {
//       document.body.classList.remove("dark-mode");
//     }
//   }, [values]);
  return [values,/*  setValues, */handleChanges,handleSubmit,showSuccessMessage];
};
