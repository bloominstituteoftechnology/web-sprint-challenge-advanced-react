// write your custom hook here to control your checkout form
import { useCheckoutForm } from "./useCheckoutForm"
	

	export const useForm = (param) => {
	    const [form, setForm] = useCheckoutForm(param, false)
	

	    return([form, setForm])
	}