import React, { useState } from "react";
import {useCheckoutForm} from "../hooks/useForm"
import {useMessage} from "../hooks/useMessage"


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
  const [showSuccessMessage, setShowSuccessMessage] = useMessage(false);
  const [newValues, setNewValues] = useCheckoutForm(initialValue);



//   const handleChanges = (e) => {
//     setValues({ ...values, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setShowSuccessMessage(true);
//   };

  return (
    <>
      <form onSubmit={setShowSuccessMessage}>
        <h2>Checkout Form</h2>
        <label>
          First Name:
          <input
            name="firstName"
            value={newValues.firstName}
            onChange={setNewValues}
          />
        </label>
        <label>
          Last Name:
          <input
            name="lastName"
            value={newValues.lastName}
            onChange={setNewValues}
          />
        </label>
        <label>
          Address:
          <input
            name="address"
            value={newValues.address}
            onChange={setNewValues}
          />
        </label>
        <label>
          City:
          <input name="city" value={newValues.city} onChange={setNewValues} />
        </label>
        <label>
          State:
          <input name="state" value={newValues.state} onChange={setNewValues} />
        </label>
        <label>
          Zip:
          <input name="zip" value={newValues.zip} onChange={setNewValues} />
        </label>
        <button data-testid="successMessage">Checkout</button>
      </form>

      {showSuccessMessage && (
        <div className="success-message" >
          <p>
            You have ordered some plants! Woo-hoo! <span role="img">🎉</span>
          </p>
          <p>Your new green friends will be shipped to:</p>
          <br />
          <br />
          <p>
            {newValues.firstName} {newValues.lastName}
          </p>
          <p>{newValues.address}</p>
          <p>
            {newValues.city}, {newValues.state} {newValues.zip}
          </p>
        </div>
      )}
    </>
  );
};

export default CheckoutForm;
