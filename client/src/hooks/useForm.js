// write your custom hook here to control your checkout form
import { useLocalStorage } from "./useLocalStorage";

export const useForm = (key, initialValue) => {
  const [values, setValues] = useLocalStorage(key, initialValue);
  return [values, setValues];
};
