// write your custom hook here to control your checkout form
import {useLocalStorage} from "./useLocalStorage";
import {useState} from "react";


const useForm =(initialValues)=>{
    const[userData, setuserData] = useLocalStorage("signupData", initialValues);
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const handleChanges = (e) => {
        console.log(e.target.name, e.target.value);
        setuserData({
          ...userData,
          [e.target.name]: e.target.value
        });
      };
    const handleSubmit = (e) => {
        e.preventDefault();
        setShowSuccessMessage(true);
      };
      return [userData, handleSubmit, handleChanges,showSuccessMessage]
}
//returning userdata , fnc and success message to form page
export default useForm;