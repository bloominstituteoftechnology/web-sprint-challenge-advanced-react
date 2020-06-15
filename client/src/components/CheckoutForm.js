import React from "react";
import { useForm } from '../hooks/useForm';



// This form should be handled by a "useForm" custom hook
// Build out the logic needed for a form custom hook (see the useForm.js file)
// and replace the necessary stateful logic from CheckoutForm with the hook

const CheckoutForm = (props) => {
  const [showSuccessMessage, values, handleChanges, handleSubmit] = useForm();


  return (
    <>
      <form onSubmit={handleSubmit}>
        <h2>Checkout Form</h2>
        <label htmlFor="firstName">
          First Name:
          <input
              id="firstName"
            name="firstName"
            value={values.firstName}
            onChange={handleChanges}
          />
        </label>
        <label htmlFor='lastName'>
          Last Name:
          <input
              id='lastName'
            name="lastName"
            value={values.lastName}
            onChange={handleChanges}
          />
        </label>
        <label htmlFor='address'>
          Address:
          <input
              id='address'
            name="address"
            value={values.address}
            onChange={handleChanges}
          />
        </label>
        <label htmlFor='city'>
          City:
          <input name="city" value={values.city} onChange={handleChanges} id='city'/>
        </label>
        <label htmlFor='state'>
          State:
          <input name="state" value={values.state} onChange={handleChanges} id='state'/>
        </label>
        <label htmlFor='zip'>
          Zip:
          <input name="zip" value={values.zip} onChange={handleChanges} id='zip'/>
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
