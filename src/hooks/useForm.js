// write your custom hook here to control your checkout form
import { CheckoutForm } from "./CheckoutForm";

export const useForm = (initialVaue) => {
  const [value, setValue] = CheckoutForm("form", initialVaue);

  return [value, setValue];
};
