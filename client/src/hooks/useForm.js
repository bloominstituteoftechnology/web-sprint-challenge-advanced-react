// write your custom hook here to control your checkout form

import React, { useState } from "react";

export const useCheckoutForm = (initialValue, key) => {
    const [value, setValues] = useState(initialValue, key);
    

    const handleChanges = (e) => {
        setValues({ ...value, [e.target.name]: e.target.value });
      };
    

  
      
      return [value , handleChanges]
    };


        
    