

import {useLocalStorage} from "react"

export const useForm = () => {

const [showSuccessMessage, setShowSuccessMessage] = useLocalStorage('value')  

return [showSuccessMessage. setShowSuccessMessage]

}

export default useForm;