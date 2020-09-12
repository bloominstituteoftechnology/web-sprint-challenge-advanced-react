// write your custom hook here to control your checkout form
import { useLocalStorage } from './useLocalStorage';

export const useForm = (key, initialValues, cb) => {
  const [values, setValues] = useLocalStorage(key, initialValues);

  return [values, setValues];
};