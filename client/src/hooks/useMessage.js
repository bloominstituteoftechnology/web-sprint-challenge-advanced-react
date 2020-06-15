


// write your custom hook here to control your checkout form

import React, { useState } from "react";

export const useMessage = (props) => {
    const [succesMessage, setSuccessMessage] = useState(false)

 
    
      const handleSubmit = (e) => {
        e.preventDefault();
        setSuccessMessage(true);
      };
    
  
      
      return [succesMessage , handleSubmit]
    };


        
    