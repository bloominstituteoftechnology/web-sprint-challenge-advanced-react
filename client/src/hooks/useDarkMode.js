import {useState, useEffect} from 'react'

export const useDarkMode = ( initialVal) => {
const [values, setValues] = useState(initialVal)
    
useEffect( () => {
    values ? document.body.classList.add('dark-mode') : document.body.classList.remove('dark-mode')
}, [values])

return [values, setValues]
}