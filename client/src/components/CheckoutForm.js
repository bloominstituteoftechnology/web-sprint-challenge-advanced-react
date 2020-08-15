import React, { useState } from "react";
import { useForm } from '../hooks/useForm'

// const initialValue = {
//   firstName: "",
//   lastName: "",
//   address: "",
//   city: "",
//   state: "",
//   zip: "",
// };

// This form should be handled by a "useForm" custom hook
// Build out the logic needed for a form custom hook (see the useForm.js file)
// and replace the necessary stateful logic from CheckoutForm with the hook

const CheckoutForm = (props) => {
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const [checkoutValues, handleChanges]= useForm({
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    state: "",
    zip: "",

  })
  // const [values, setValues] = useState(initialValue);

  // const handleChanges = (e) => {
  //   setValues({ ...values, [e.target.name]: e.target.value });
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowSuccessMessage(true);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h2>Checkout Form</h2>
        <label >
          First Name:
          <input
            name="firstName"
            value={checkoutValues.firstName}
            onChange={handleChanges}
            placeholder="first name here"
            
          />
        </label>
        <label>
          Last Name:
          <input
            name="lastName"
            value={checkoutValues.lastName}
            onChange={handleChanges}
            placeholder="last name here"
          />
        </label>
        <label>
          Address:
          <input
            name="address"
            value={checkoutValues.address}
            onChange={handleChanges}
            placeholder="address here"
          />
        </label>
        <label>
          City:
          <input 
            name="city" 
            value={checkoutValues.city} 
            onChange={handleChanges}
            placeholder="city here"
          />
        </label>
        <label>
          State:
          <input 
            name="state"
            value={checkoutValues.state} 
            onChange={handleChanges} 
            placeholder="state here"
          />
        </label>
        <label>
          Zip:
          <input name="zip" value={checkoutValues.zip} onChange={handleChanges} placeholder="zip code here"/>
        </label>
        <button data-testid='button'>Checkout</button>
      </form>

      {showSuccessMessage && (
        <div className="success-message" data-testid="successMessage">
          <p>
            You have ordered some plants! Woo-hoo! <span role="img">🎉</span>
          </p>
          <p>Your new green friends will be shipped to:</p>
          <br />
          <br />
          <p>
            {checkoutValues.firstName} {checkoutValues.lastName}
          </p>
          <p>{checkoutValues.address}</p>
          <p>
            {checkoutValues.city}, {checkoutValues.state} {checkoutValues.zip}
          </p>
        </div>
      )}
    </>
  );
};

export default CheckoutForm;
