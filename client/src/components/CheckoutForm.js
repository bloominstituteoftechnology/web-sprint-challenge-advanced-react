import React, { useState } from "react";
import useForm from "../hooks/useForm";
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
 //Custom hooks 
const[userData,handleSubmit,handleChanges,showSuccessMessage]=useForm(
  initialValue
);
  return (
    <>
      <form onSubmit={handleSubmit}>
        <h2>Checkout Form</h2>
        <label>
          First Name:
          <input
            name="firstName"
            value={userData.firstName}
            onChange={handleChanges}
          />
        </label>
        <label>
          Last Name:
          <input
            name="lastName"
            value={userData.lastName}
            onChange={handleChanges}
          />
        </label>
        <label>
          Address:
          <input
            name="address"
            value={userData.address}
            onChange={handleChanges}
          />
        </label>
        <label>
          City:
          <input name="city" value={userData.city} onChange={handleChanges} />
        </label>
        <label>
          State:
          <input name="state" value={userData.state} onChange={handleChanges} />
        </label>
        <label>
          Zip:
          <input name="zip" value={userData.zip} onChange={handleChanges} />
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
            {userData.firstName} {userData.lastName}
          </p>
          <p>{userData.address}</p>
          <p>
            {userData.city}, {userData.state} {userData.zip}
          </p>
        </div>
      )}
    </>
  );
};

export default CheckoutForm;
