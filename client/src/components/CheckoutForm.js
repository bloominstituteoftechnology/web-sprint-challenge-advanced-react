import React, { useState } from "react";
import useForm from '../hooks/useForm'

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
  const [formValue, handleChanges, clearForm] = useForm(initialValue);

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
            value={formValue.firstName}
            onChange={handleChanges}
          />
        </label>
        <label>
          Last Name:
          <input
            name="lastName"
            value={formValue.lastName}
            onChange={handleChanges}
          />
        </label>
        <label>
          Address:
          <input
            name="address"
            value={formValue.address}
            onChange={handleChanges}
          />
        </label>
        <label>
          City:
          <input name="city" value={formValue.city} onChange={handleChanges} />
        </label>
        <label>
          State:
          <input name="state" value={formValue.state} onChange={handleChanges} />
        </label>
        <label>
          Zip:
          <input name="zip" value={formValue.zip} onChange={handleChanges} />
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
            {formValue.firstName} {formValue.lastName}
          </p>
          <p>{formValue.address}</p>
          <p>
            {formValue.city}, {formValue.state} {formValue.zip}
          </p>
        </div>
      )}
    </>
  );
};

export default CheckoutForm;
