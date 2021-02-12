// write your custom hook here to control your checkout form


import { useState } from "react"
import useLocalStorage from './useLocalStorage'

const useForm = (initialValue) => {
    const [values, setValues] = useLocalStorage("formi", initialValue);
    const [success, setSuccess] = useState(false)

    const handleChange = e => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        setSuccess(true)
    }
    return[values, handleChange, handleSubmit, setSuccess]
}

export default useForm