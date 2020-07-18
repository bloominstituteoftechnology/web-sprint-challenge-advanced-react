import { useState } from 'react'

export const useLightMode = (initialValue) => {
    const [ useLightMode, setLightMode ] = useState(initialValue);

    if(useLightMode) {
        document.querySelector('body').classList.add('light-mode')
    }else{
        document.querySelector('body').classList.remove('light-mode')
    }

    const setMode = (e) => {
        e.preventDefault();
        setLightMode(!useLightMode)
    }

    return [useLightMode, setMode]
}