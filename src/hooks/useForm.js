// write your custom hook here to control your checkout form
import {useLocalStorage} from './useLocalStorage'

export const useForm = (key, initialValues) => {

const [someValue, setSomeValue] = useLocalStorage(key, initialValues)

const handleChange= (input) => {
    setSomeValue(input)
}
    return [someValue, handleChange]
}
