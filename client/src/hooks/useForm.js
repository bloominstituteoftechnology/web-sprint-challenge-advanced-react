// write your custom hook here to control your checkout form

import { useState } from "react"

export default function useForm(initialValue) {
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const [values, setValues] = useState(initialValue);
    return [values, showSuccessMessage, setValues, setShowSuccessMessage]
}