import React from "react";
import { useForm } from "../hooks/useForm";

// This form should be handled by a "useForm" custom hook
// Build out the logic needed for a form custom hook (see the useForm.js file)
// and replace the necessary stateful logic from CheckoutForm with the hook

// export initialValue to custom hook component
export const initialValue = {
  firstName: "",
  lastName: "",
  address: "",
  city: "",
  state: "",
  zip: "",
};

const CheckoutForm = () => {
  /*
  We're destructuring the returned values from our custom hook in the exact order.
  destructured value names inside our CheckoutForm do not matter but will still have the same 
  functionality as the order that they were given in our custom hook return.
  */
  const [values, handleSubmit, handleChanges, showSuccessMessage] = useForm();

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
          />
        </label>
        <label>
          Last Name:
          <input
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
