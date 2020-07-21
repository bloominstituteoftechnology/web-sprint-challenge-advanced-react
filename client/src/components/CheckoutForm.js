import React from "react";
import {useForm} from '../hooks/useForm'



// This form should be handled by a "useForm" custom hook
// Build out the logic needed for a form custom hook (see the useForm.js file)
// and replace the necessary stateful logic from CheckoutForm with the hook

const CheckoutForm = (props) => {
  // const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  // const [values, setValues] = useState(initialValue);

  // const handleChanges = (e) => {
  //   setValues({ ...values, [e.target.name]: e.target.value });
  // };
const initialValue = {
  firstName: "",
  lastName: "",
  address: "",
  city: "",
  state: "",
  zip: "",
  showSuccessMessage:false
};
  const [value,handleSubmit, handleChanges] = useForm(initialValue)

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h2>Checkout Form</h2>
        <label>
          First Name:
          <input
            name="firstName"
            value={value.firstName}
            onChange={handleChanges}
          />
        </label>
        <label>
          Last Name:
          <input
            name="lastName"
            value={value.lastName}
            onChange={handleChanges}
          />
        </label>
        <label>
          Address:
          <input
            name="address"
            value={value.address}
            onChange={handleChanges}
          />
        </label>
        <label>
          City:
          <input name="city" value={value.city} onChange={handleChanges} />
        </label>
        <label>
          State:
          <input name="state" value={value.state} onChange={handleChanges} />
        </label>
        <label>
          Zip:
          <input name="zip" value={value.zip} onChange={handleChanges} />
        </label>
        <button>Checkout</button>
      </form> 

      {value.showSuccessMessage && (
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
