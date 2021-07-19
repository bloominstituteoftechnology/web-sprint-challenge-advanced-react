import {useState} from 'react'

//import "./styles.scss";


	export const useCheckoutForm = (key, initialValue) => {
	    
	    const [value, setValue] = useState(() => {
	      if (checkoutForm.getItem(key)) {
	        return (JSON.parse(checkoutForm.getItem(key)));
	      } else {
	        checkoutForm.setItem(key, JSON.stringify(initialValue));
	        return initialValue;
	      }
	    });

       	   
	    const setStoredValue = (value) => {

            checkoutForm.setItem(key, JSON.stringify(value));
            setValue(value);
          }
        
          return ([value, setStoredValue]);
            
          }
        
          