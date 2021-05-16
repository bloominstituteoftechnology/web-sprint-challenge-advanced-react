import {useState} from 'react';

const useForm = (initalValues) =>{

  const [values, setValues] = useState(initalValues);
   const handleChange = event =>{

    setValues({
    ...values,[event.target.name]:event.target.value
});
}
return ([values, handleChange]);
}
export default useForm