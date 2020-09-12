// write your custom hook here to control your checkout form
import { useState } from "react";
import { useLocalStorage } from "./useLocalStorage";

export const useForm = (key, initialValue) => {
  // set state, handleSubmit/changes here using initalValue return in an array of functions for other components to consume
  // local storage?

  //   set state
  const [values, setValues] = useLocalStorage(key, initialValue);

  console.log("SV.useForm: value", values);

  //handle change

  const handleChanges = (e) => {
    setValues({
      ...values,
      [e.targe.name]: e.target.value,
    });
  };

  //   handle Submit

  return [values, handleChanges];
};
