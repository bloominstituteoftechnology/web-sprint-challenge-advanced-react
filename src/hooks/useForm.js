import React , { useState } from "react";

export const useForm = (initialValue) => {

  const [values, setValues] = useState(initialValue);


return [values, setValues];
  
  };



export default useForm;