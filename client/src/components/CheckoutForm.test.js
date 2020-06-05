import React from "react";
import { render, fireEvent } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
// import App from './App'

// Write up the two tests here and make sure they are testing what the title shows
  

test("form shows success message on submit with form details", () => {
const { getByLabelText, getByText, findAllByText } = render(<CheckoutForm />);

  const firstNameInput = getByLabelText(/First Name/i);
  const lastNameInput = getByLabelText(/Last Name/i);
  const addressInput = getByLabelText(/Address/i);

  fireEvent.change(firstNameInput, {
    target: { name: "firstName", value: "stephen" }
  });
  fireEvent.change(lastNameInput, {
    target: { name: "lastName", value: "gary" }
  });
  fireEvent.change(addressInput, {
    target: { name: "address", value: "2472 S.Bird Lake Rd." }
  });



});
