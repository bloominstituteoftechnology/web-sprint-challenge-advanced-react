import React, { useState } from 'react'

const useLocalStorage = (key, initialValue) => {
    const [savedValue, setSavedValue] = useState(() => {
        if (JSON.parse(window.localStorage.getItem(key))) {
            return JSON.parse(window.localStorage.getItem(key))
        }
        else {
            window.localStorage.getItem(key, JSON.stringify(initialValue))
            return initialValue
        }
    })

    const setValue = value => {
        setSavedValue(value)
        window.localStorage.setItem(key, JSON.stringify(value))
    }
    return[savedValue, setValue]
}
export default useLocalStorage;