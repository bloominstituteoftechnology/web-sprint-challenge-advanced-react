import React, { useState } from "react";
import { useForm } from '../hooks/useForm'

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
  const [plantValues, handleChanges] = useForm(initialValue);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowSuccessMessage(true);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h2>Checkout Form</h2>
        <label htmlFor='firstName'>
          First Name:
          <input
            id='firstName'
            name="firstName"
            value={plantValues.firstName}
            onChange={handleChanges}
          />
        </label>
        <label htmlFor='lastName'>
          Last Name:
          <input
            id='lastName'
            name="lastName"
            value={plantValues.lastName}
            onChange={handleChanges}
          />
        </label>
        <label htmlFor='address'>
          Address:
          <input
            id='address'
            name="address"
            value={plantValues.address}
            onChange={handleChanges}
          />
        </label>
        <label htmlFor='city'>
          City:
          <input
            id='city' 
          name="city" 
          value={plantValues.city} 
          onChange={handleChanges} />
        </label>
        <label htmlFor='state'>
          State:
          <input
            id='state' 
          name="state" 
          value={plantValues.state} 
          onChange={handleChanges} />
        </label>
        <label htmlFor='zip'>
          Zip:
          <input
            id='zip'
          name="zip" 
          value={plantValues.zip} 
          onChange={handleChanges} />
        </label>
        <button>Checkout</button>
      </form>

      {showSuccessMessage && (
        <div className="success-message" data-testid="successMessage">
          <p>
            You have ordered some plants! Woo-hoo! <span role="img" aria-label='Party'>🎉</span>
          </p>
          <p>Your new green friends will be shipped to:</p>
          <br />
          <br />
          <p>
            {plantValues.firstName} {plantValues.lastName}
          </p>
          <p>{plantValues.address}</p>
          <p>
            {plantValues.city}, {plantValues.state} {plantValues.zip}
          </p>
        </div>
      )}
    </>
  );
};

export default CheckoutForm;
