import { useState } from "react";

export const useForm = (initialValue) => {
  const [value, setValue] = useState(initialValue);

  const handleChange = (e) => {
    //Always do this to prevent errors... 
    setValue((prevValue) => ({
      ...prevValue,
      [e.target.name]: e.target.value,
    }));
  };

  return [value, handleChange];
};
