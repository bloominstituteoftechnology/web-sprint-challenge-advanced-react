// write your custom hook here to control your checkout form


// Technically this very basic hook meets MVP for this assignment. However, no matter how many times it is called it is garenteed to be more inefficent. I think we can do better...

import { useState, useEffect } from "react";

export default function useForm(initialValue) {
    const [values, setValues] = useState(initialValue)

    return[values, setValues]
}

// Here is another possibility for a custom hook that sets and updates the data. In this instance using this custom hook is STILL less efficient than just calling useEffect and updating data natively; however if you have an application that uses this hook more than once it CAN be more efficient depending on the use. 

export function useAnActuallyEfficientHook(initialValue) {
    const [value, setValue] = useState(initialValue) 
    
    const handleChanges = (e) => {
        setValue({ ...value, [e.target.name]: e.target.value });
      };

      //We will import but not use this. It would be nice to be able to reset the form but the data in the box is rendering based off of the information that is saved from the form. Resetting the information resets the form. However, thinking about flexability cases we would most likely want to implement a reset function on most other forms so it makes sense to include it here.  
      const reset = () => {
          setValue(initialValue)
      }

      return [value, handleChanges, reset]
}



