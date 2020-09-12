// write your custom hook here to control your checkout form
import { useLocalStorage } from "./useLocalStorage";

export const useForm = (initialValue, cb) => {
  const [values, setValues] = useLocalStorage("form-data", initialValue);

  const handleChanges = e => {
    setValues({
      ...values,
      [e.target.name]: e.target.value
    });
    console.log(setValues, "tt: setValues: handle changes")
  };

  const handleSubmit = e => {
    e.preventDefault();
    cb();
  };

  const clearForm = e => {
    e.preventDefault();
    setValues(initialValue);
  };

  return [values, handleChanges, handleSubmit, clearForm];
};


