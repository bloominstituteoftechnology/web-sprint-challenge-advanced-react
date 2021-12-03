// write your custom hook here to control your checkout form
import React, { useState } from 'react'

const useForm = (initialValues) => {
    const [values, setValues] = useState(initialValues)

    return (
        [values, setValues]
    )
}

export default useForm;