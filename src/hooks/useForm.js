// write your custom hook here to control your checkout form
import { useState } from "react"

const useForm = () => {
  const [values, setValues] = useState()

  return [values, setValues]
}
export default useForm
