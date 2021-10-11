import {useState} from "react";

const useForm = () => {
    const [values, setValues] = useState("");
        
    const handleChanges = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
        };

    return [values, handleChanges];
}

export default useForm;