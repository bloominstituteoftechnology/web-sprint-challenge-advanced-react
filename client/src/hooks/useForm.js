import { useState } from 'react'

const useForm = (initalValue) => {
  const [showSuccessMessage, setShowSuccessMessage] = useState(false)
  const [values, setValues] = useState(initalValue)

  const handleSubmit = (event) => {
    if (event) event.preventDefault()
    setShowSuccessMessage(true)
  }

  const handleChanges = (event) => {
    event.persist()
    setValues((values) => ({
      ...values,
      [event.target.name]: event.target.value,
    }))
  }

  return {
    values,
    handleChanges,
    handleSubmit,
    showSuccessMessage,
  }
}

export default useForm
