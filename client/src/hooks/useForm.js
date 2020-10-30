// write your custom hook here to control your checkout form
import React from 'react'
import useLocalStorage from './useLocalStorage'

const useForm = (key, initialValue) => {
    const [data, setData] = useLocalStorage(key, initialValue)
    const handleChanges = e => {
        setData({...data, [e.target.name]: e.target.value})
    }
    return [data,handleChanges]
}
export default useForm;