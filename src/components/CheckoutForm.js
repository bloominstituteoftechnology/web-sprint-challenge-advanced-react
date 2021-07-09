import React, { useState } from "react";
import  useForm  from '../hooks/useForm'
<<<<<<< HEAD
=======

>>>>>>> f02424adcac7626ef0c612734664db264109c9d6

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
<<<<<<< HEAD
  
  const [values, showSuccessMessage, handleSubmit, handleChanges] = useForm(initialValue)


=======
 
  };
  const [values, showSuccessMessage, handleSubmit, handleChanges] = useForm(initialValue)
>>>>>>> f02424adcac7626ef0c612734664db264109c9d6
  return (
    <>
      <form onSubmit={handleSubmit}>
        <h2>Checkout Form</h2>
<<<<<<< HEAD
        <label htmlFor='firstName'>
=======
        <label htmlFor="firstName">
>>>>>>> f02424adcac7626ef0c612734664db264109c9d6
          First Name:
          <input
            name="firstName"
            value={values.firstName}
<<<<<<< HEAD
            onChange={handleChanges}
            id='firstName'
          />
        </label>
        <label htmlFor='lastName'>
=======
            onChange={handleChanges} id="firstName"
          />
        </label>
        <label htmlFor="lastName">
>>>>>>> f02424adcac7626ef0c612734664db264109c9d6
          Last Name:
          <input
            name="lastName"
            value={values.lastName}
            onChange={handleChanges}
            id='lastName'
          />
        </label>
        <label htmlFor='address'>
          Address:
          <input
            name="address"
            value={values.address}
            onChange={handleChanges}
            id='address'
          />
        </label>
        <label htmlFor='city'>
          City:
          <input name="city" id='city' value={values.city} onChange={handleChanges} />
        </label>
        <label htmlFor='state'>
          State:
          <input name="state" id='state' value={values.state} onChange={handleChanges} />
        </label>
        <label htmlFor='zip'>
          Zip:
          <input name="zip" id='zip' value={values.zip} onChange={handleChanges} />
        </label>
        <button>Checkout</button>
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
