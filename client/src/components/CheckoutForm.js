import React, { useState } from "react";
import useForm from '../hooks/useForm';

// This form should be handled by a "useForm" custom hook
// Build out the logic needed for a form custom hook (see the useForm.js file)
// and replace the necessary stateful logic from CheckoutForm with the hook

const initialValue = {
  firstName: "",
  lastName: "",
  address: "",
  city: "",
  state: "",
  zip: "",
};

const CheckoutForm = (props) => {
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [values, handleChanges] = useForm(initialValue);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setShowSuccessMessage(true);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h2>Checkout Form</h2>
        <label>
          First Name:
          <input
            name="firstName"
            value={values.firstName}
            onChange={handleChanges}
            id="firstName"
          />
        </label>
        <label>
          Last Name:
          <input
            name="lastName"
            value={values.lastName}
            onChange={handleChanges}
            id="lastName"
          />
        </label>
        <label>
          Address:
          <input
            name="address"
            value={values.address}
            onChange={handleChanges}
            id="address"
          />
        </label>
        <label>
          City:
          <input name="city" value={values.city} onChange={handleChanges}
          id="city" />
        </label>
        <label>
          State:
          <input name="state" value={values.state} onChange={handleChanges}
          id="state" />
        </label>
        <label>
          Zip:
          <input name="zip" value={values.zip} onChange={handleChanges}
          id="zip" />
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
          <p data-testid='formValuesDisplayed'>
            {values.firstName} {values.lastName}
          </p>
          <p data-testid='formValuesDisplayed'>{values.address}</p>
          <p data-testid='formValuesDisplayed'>
            {values.city}, {values.state} {values.zip}
          </p>
        </div>
      )}
    </>
  );
};

export default CheckoutForm;
