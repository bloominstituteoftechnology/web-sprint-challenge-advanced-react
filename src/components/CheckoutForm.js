import React, { useState } from "react";
import useForm from '../hooks/useForm';

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
  const [value, handleChange ] = useForm(initialValue);


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
            value={value.firstName}
            onChange={handleChange}
          />
        </label>
        <label>
          Last Name:
          <input
            name="lastName"
            value={value.lastName}
            onChange={handleChange}
          />
        </label>
        <label>
          Address:
          <input
            name="address"
            value={value.address}
            onChange={handleChange}
          />
        </label>
        <label>
          City:
          <input name="city" value={value.city} onChange={handleChange} />
        </label>
        <label>
          State:
          <input name="state" value={value.state} onChange={handleChange} />
        </label>
        <label>
          Zip:
          <input name="zip" value={value.zip} onChange={handleChange} />
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
            {value.firstName} {value.lastName}
          </p>
          <p>{value.address}</p>
          <p>
            {value.city}, {value.state} {value.zip}
          </p>
        </div>
      )}
    </>
  );
};

export default CheckoutForm;
