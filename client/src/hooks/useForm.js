import { useLocalStorage } from "./useLocalStorage";

const useForm = (key, initialValues, callBack) => {
  const [values, setValues] = useLocalStorage(key, initialValues);

  const handleChanges = (e) => {
    console.log(e.target.name);
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    if (e) e.preventDefault();
    callBack();
  };

  const clearForm = (e) => {
    e.preventDefault();
    setValues(initialValues);
  };

  return [values, clearForm, handleSubmit, handleChanges];
};

export default useForm;
