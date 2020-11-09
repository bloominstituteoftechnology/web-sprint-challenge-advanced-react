// write your custom hook here to control your checkout form
import { useLocalStorage } from './useLocalStorage'



export default  useForm = (initialValue,) => {
    // const [values, setValues] = useLocalStorage(key, initialValues);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [values, setValues] = useState(initialValue);

  const handleChanges = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowSuccessMessage(true);
  };
  
    return [showSuccessMessage, values, handleChanges, handleSubmit];
  };
  