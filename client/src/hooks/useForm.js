// write your custom hook here to control your checkout form
import { useLocalStorage } from "./useLocalStorage";

export const useForm = () => {
  const [values, setValues] = useLocalStorage("values", false);

  const handleChanges = e => {
    setValues({
      ...values,
      [e.target.name]: e.target.value
    });
  };

  return [values, handleChanges];
};
