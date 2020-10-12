import React, { useState } from 'react';

import { useFormInput } from '../hooks/useForm';

const initialValue = {
  firstName: '',
  lastName: '',
  address: '',
  city: '',
  state: '',
  zip: '',
};

// This form should be handled by a "useForm" custom hook
// Build out the logic needed for a form custom hook (see the useForm.js file)
// and replace the necessary stateful logic from CheckoutForm with the hook

const CheckoutForm = (props) => {
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [values, handleChanges] = useFormInput(initialValue);



  const handleSubmit = async (e) => {
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
            id='firstName'
            name='firstName'
            value={values.firstName}
            onChange={handleChanges}
          />
        </label>
        <label>
          Last Name:
          <input
            id='lastName'
            name='lastName'
            value={values.lastName}
            onChange={handleChanges}
          />
        </label>
        <label>
          Address:
          <input
            id='address'
            name='address'
            value={values.address}
            onChange={handleChanges}
          />
        </label>
        <label>
          City:
          <input
            id='city'
            name='city'
            value={values.city}
            onChange={handleChanges}
          />
        </label>
        <label>
          State:
          <input
            id='state'
            name='state'
            value={values.state}
            onChange={handleChanges}
          />
        </label>
        <label>
          Zip:
          <input
            id='zip'
            name='zip'
            value={values.zip}
            onChange={handleChanges}
          />
        </label>
        <button>Checkout</button>
      </form>

      {showSuccessMessage && (
        <div className='success-message' data-testid='successMessage'>
          <p>
            You have ordered some plants! Woo-hoo! <span role='img'>🎉</span>
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
