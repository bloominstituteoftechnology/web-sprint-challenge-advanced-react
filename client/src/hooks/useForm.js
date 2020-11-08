// write your custom hook here to control your checkout form
import {useState} from "react"

export const useForm = (initialValue) => {
    const [values, setValues] = useState(initialValue);


    return [values, setValues]
}