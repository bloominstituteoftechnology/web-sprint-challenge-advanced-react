import React, { useState } from "react";
import useForm from "../hooks/useForm.js";



// This form should be handled by a "useForm" custom hook
// Build out the logic needed for a form custom hook (see the useForm.js file)
// and replace the necessary stateful logic from CheckoutForm with the hook

export const CheckoutForm = (props) => {
 

    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const [First, setFirst, handleFirst] = useForm("");
    const [Last, setLast, handleLast] = useForm("");
    const [Address, setAddress, handleAddress] = useForm("");
    const [City, setCity, handleCity] = useForm("");
    const [State, setState, handleState] = useForm("");
    const [Zip, setZip, handleZip] = useForm("");
  

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
            value={First}
            onChange={e => handleFirst(e.target.value)}
          />
        </label>
        <label>
          Last Name:
          <input
            name="lastName"
            value={Last}
            onChange={e => handleLast(e.target.value)}
          />
        </label>
        <label>
          Address:
          <input
            name="address"
            value={Address}
            onChange={e => handleAddress(e.target.value)}
          />
        </label>
        <label>
          City:
          <input name="city" value={City} onChange={e => handleCity(e.target.value)} />
        </label>
        <label>
          State:
          <input name="state" value={State} onChange={e => handleState(e.target.value)} />
        </label>
        <label>
          Zip:
          <input name="zip" value={Zip} onChange={e => handleZip(e.target.value)} />
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
            {First} {Last}
          </p>
          <p>{Address}</p>
          <p>
            {City}, {State} {Zip}
          </p>
        </div>
      )}
    </>
  );
};

export default CheckoutForm;
