// write your custom hook here to control your checkout form
import {useState} from 'react';


export const useForm = initialValue => {
  const [values, setValues] = useState(initialValue);

  const handleChanges = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  return [values, handleChanges];
//     const [values, setValues] = useState("");
//     const [inputText, setInputText] = useState("");
  
//     const handleChanges = e => {
//       setValues(e.target.values);
//     };
  
//     const changevalues = e => {
//       e.preventDefault();
//       setValues(inputText);
//       setInputText("");
//     };
// //     const [values, setValues] = useState(initialvalues);
//     const [input, setInput] = useState("");
//     const handleChanges = updatedvalues => {
//       setValues(updatedvalues);
//     };
    // return [input, values, setValues, handleChanges];
//   };

    return {
        handleChanges,
        // handleSubmit,
        values,
    }}
export default useForm;