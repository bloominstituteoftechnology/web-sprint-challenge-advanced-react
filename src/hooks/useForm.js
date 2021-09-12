// write your custom hook here to control your checkout form
import checkoutForm from "../components/CheckoutForm"

export const useForm = (param) => {
    const [form, setForm] = checkoutForm(param, false)
    const [values, setValues] = useForm(param);
    
    const handleChanges = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
      };

    return([form, handleChanges])
}