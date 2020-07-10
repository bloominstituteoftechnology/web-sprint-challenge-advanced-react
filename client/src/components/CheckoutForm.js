import React, { useState } from "react";
import { useForm } from '../hooks/useForm';

const initialValue = {
  firstName: "",
  lastName: "",
  address: "",
  city: "",
  state: "",
  zip: "",
};

// This form should be handled by a "useForm" custom hook
// Build out the logic needed for a form custom hook (see the useForm.js file)
// and replace the necessary stateful logic from CheckoutForm with the hook

const CheckoutForm = (props) => {
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [values, handleSubmit, handleChanges] = useForm('signupForm', initialValue);

  // const handleChanges = (e) => {
  //   setValues({ ...values, [e.target.name]: e.target.value });
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   setShowSuccessMessage(true);
  // };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h2>Checkout Form</h2>
        <label htmlFor='firstName'></label>
          first name
          <input
            name="firstName"
            value={values.firstName}
            onChange={handleChanges}
          />
        
        <label htmlFor='lastName'></label>
         last name
          <input
            name="lastName"
            value={values.lastName}
            onChange={handleChanges}
          />
        
        <label htmlFor='address'></label>
          address
          <input
            name="address"
            value={values.address}
            onChange={handleChanges}
          />
        
        <label htmlFor='city'></label>
          city
          <input name="city" value={values.city} onChange={handleChanges} />
        
        <label htmlFor='state'></label>
          state
          <input name="state" value={values.state} onChange={handleChanges} />
        
        <label htmlFor='zip'></label>
          zip
          <input name="zip" value={values.zip} onChange={handleChanges} />
        
        <button data-testid='formSubmit'>Checkout</button>
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
            {values.firstName} {values.lastName}
          </p>
          <p>{values.address}</p>
          <p>
            {values.city}, {values.state} {values.zip}
          </p>
        </div>
      )}
    </>
  );
};

export default CheckoutForm;
