import React from "react";


// and replace the necessary stateful logic from CheckoutForm with the hook
import useForm from "./../hooks/useForm"

const initialValue = {
  firstName: "",
  lastName: "",
  address: "",
  city: "",
  state: "",
  zip: "",
};


const CheckoutForm = (props) => {
// This form should be handled by a "useForm" custom hook

const [values, showSuccessMessage, handleChanges, handleSubmit] = useForm(initialValue)
  // const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  // const [values, setValues] = useState(initialValue);


  return (
    <>
      <form onSubmit={handleSubmit}>
        <h2 aria-label="header" data-testid="header">Checkout Form</h2>
        <label>
          First Name:
          <input
            name="firstName"
            value={values.firstName}
            onChange={handleChanges}
            aria-label="firstName"
            data-testid="firstName"
          />
        </label>
        <label>
          Last Name:
          <input
            name="lastName"
            value={values.lastName}
            onChange={handleChanges}
            aria-label="lastName"
            data-testid="lastName"          />
        </label>
        <label>
          Address:
          <input
            name="address"
            value={values.address}
            onChange={handleChanges}
            aria-label="address"
            data-testid="address"          />
        </label>
        <label>
          City:
          <input name="city"
            value={values.city}
            onChange={handleChanges}
            aria-label="city"
            data-testid="city"          />
        </label>
        <label>
          State:
          <input name="state"
            value={values.state}
            onChange={handleChanges}
            aria-label="state"
            data-testid="state"          />
        </label>
        <label>
          Zip:
          <input name="zip"
            value={values.zip}
            onChange={handleChanges}
            aria-label="zip"
            data-testid="zip"          />
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
