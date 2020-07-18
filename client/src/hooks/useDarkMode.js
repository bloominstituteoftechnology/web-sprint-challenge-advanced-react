import { useLocalStorage } from '../hooks/useLocalStorage';
import { useEffect } from 'react';


export const useDarkMode = initialValue => {
    const [darkMode, setDarkMode] = useLocalStorage(initialValue);

    useEffect(() => {
        if (darkMode === true) {
            document.querySelector('body').classList.add('dark-mode')
        }
        else {
            document.querySelector('body').classList.remove('dark-mode')
        }
    }, [darkMode])
    return [darkMode, setDarkMode]
}