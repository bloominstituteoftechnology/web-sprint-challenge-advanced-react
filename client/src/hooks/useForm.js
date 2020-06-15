// write your custom hook here to control your checkout form
import { checkoutForm } from "../components/CheckoutForm";
import { useEffect } from "react";

export const useDarkMode = (key, initialValue) => {
  const [values, setValues] = useLocalStorage();

  useEffect(() => {
    if (values === true) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [values]);
  return [values, setValues];
};
