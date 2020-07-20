import React, { useState } from "react";
import {useForm} from '../hooks/useForm'

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
  // const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  // const [values, setValues] = useState(initialValue);

  // const handleChanges = (e) => {
  //   setValues({ ...values, [e.target.name]: e.target.value });
  // };

  const [showSuccessMessage, setShowSuccessMessage] = useForm(false);
  const[firstName,setF,handleFname] = useForm()
  const[lastName,setL,handlelastname] = useForm()
  const[address,setA,handleaddress] = useForm()
  const[city,setC,handlecity] = useForm()
  const[state,setS,handlestate] = useForm()
  const[zip,setZ,handlezip] = useForm()

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowSuccessMessage(true);
    setL('')
    setF('')
    setA('')
    setC('')
    setS('')
    setZ('')

  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h2>Checkout Form</h2>
        <label>
          First Name:
          <input
            name="firstName"
            value={firstName}
            onChange={e => handleFname(e.target.value)}
          />
        </label>
        <label>
          Last Name:
          <input
            name="lastName"
            value={lastName}
            onChange={e => handlelastname(e.target.value)}
          />
        </label>
        <label>
          Address:
          <input
            name="address"
            value={address}
            onChange={e => handleaddress(e.target.value)}
          />
        </label>
        <label>
          City:
          <input name="city" value={city} onChange={e => handlecity(e.target.value)} />
        </label>
        <label>
          State:
          <input name="state" value={state} onChange={e => handlestate(e.target.value)} />
        </label>
        <label>
          Zip:
          <input name="zip" value={zip} onChange={e => handlezip(e.target.value)} />
        </label>
        <button>Checkout</button>
      </form> 

      {/* {showSuccessMessage && (
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
      )} */}
    </>
  );
};

export default CheckoutForm;
