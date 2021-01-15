import React from "react";
import useForm from "../hooks/useForm";

// This form should be handled by a "useForm" custom hook
// Build out the logic needed for a form custom hook (see the useForm.js file)
// and replace the necessary stateful logic from CheckoutForm with the hook

const CheckoutForm = (props) => {
  const [
    values,
    showSuccessMessage,
    handleSubmit,
    handleChanges,
    confirmValues,
  ] = useForm();
  return (
    <>
      <form onSubmit={handleSubmit}>
        <h2>Checkout Form</h2>
        <label>
          First Name:
          <input
            id="firstName"
            type="text"
            name="firstName"
            value={values.firstName}
            onChange={handleChanges}
          />
        </label>
        <label>
          Last Name:
          <input
            id="lastName"
            type="text"
            name="lastName"
            value={values.lastName}
            onChange={handleChanges}
          />
        </label>
        <label>
          Address:
          <input
            name="address"
            value={values.address}
            onChange={handleChanges}
          />
        </label>
        <label>
          City:
          <input name="city" value={values.city} onChange={handleChanges} />
        </label>
        <label>
          State:
          <input name="state" value={values.state} onChange={handleChanges} />
        </label>
        <label>
          Zip:
          <input name="zip" value={values.zip} onChange={handleChanges} />
        </label>
        <button>Checkout</button>
      </form>

      {showSuccessMessage && (
        <div className="success-message" data-testid="successMessage">
          <p>You have ordered some plants! Woo-hoo!</p>
          <p>Your new green friends will be shipped to:</p>
          <br />
          <br />
          <p>
            {confirmValues.firstName} {confirmValues.lastName}
          </p>
          <p>{confirmValues.address}</p>
          <p>
            {confirmValues.city}, {confirmValues.state} {confirmValues.zip}
          </p>
        </div>
      )}
    </>
  );
};

export default CheckoutForm;
