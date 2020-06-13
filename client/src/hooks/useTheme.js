
import {useState, useEffect} from 'react'

export const useTheme = ( initialVal) => {
const [values, setValues] = useState(initialVal)
    
useEffect( () => {
    values ? document.body.classList.add('theme') : document.body.classList.remove('theme')
}, [values])

return [values, setValues]
}