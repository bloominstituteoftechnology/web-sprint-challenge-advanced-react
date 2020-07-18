// write your custom hook here to control your checkout form
import { useEffect } from 'react';
import { useLocalStorage} from '../hooks/useLocalStorage';


const useForm = (props) => {
    const [showSuccessMessage, setShowSuccessMessage] = useLocalStorage(initialValue);
    

    useEffect(() => {
        if (showSuccessMessage  === true) {
            document.querySelector('body').classList.add('success-message')
        }
        else {
            document.querySelector('body').classList.remove('success-message')
        }
    }, [])
}