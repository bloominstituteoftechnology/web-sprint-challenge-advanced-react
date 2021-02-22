import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

const setup = () => {
  render(<CheckoutForm />);
  const header = screen.getByText(/checkout form/i)
  const firstName = screen.getByLabelText(/first name/i)
  const lastName = screen.getByLabelText(/last name/i)
  const address = screen.getByLabelText(/address/i)
  const city = screen.getByLabelText(/city/i)
  const state = screen.getByLabelText(/state/i)
  const zip = screen.getByLabelText(/zip/i)
  const submitButton = screen.getByTestId("checkoutSubmit")
  return {
    header,
    firstName,
    lastName,
    address,
    city,
    state,
    zip,
    submitButton
  };
};
test("form header renders", () => {
  const { header } = setup()
  expect(header).toHaveTextContent(/checkout form/i)
});

test("form shows success message on submit with form details", async () => {
  const { firstName, lastName, address, city, state, zip, submitButton } = setup()
  const inputFields = ( input, value ) => {
    fireEvent.change(input, {target: {value: value}});
  }

  inputFields( firstName, 'John')
  inputFields( lastName, 'Doe')
  inputFields( address, '555 Test Ave')
  inputFields( city, 'San Francisco')
  inputFields( state, 'CA')
  inputFields( zip, '55555')
  
  fireEvent.click(submitButton)
  await expect(screen.getByText(/John/i)).toHaveTextContent(/John/i)
  await expect(screen.getByText(/Doe/i)).toHaveTextContent(/Doe/i)
  await expect(screen.getByText(/555 Test Ave/i)).toHaveTextContent(/555 Test Ave/i)
  await expect(screen.getByText(/San Francisco/i)).toHaveTextContent(/San Francisco/i)
  await expect(screen.getByText(/CA/i)).toHaveTextContent(/CA/i)
  await expect(screen.getByText(/55555/i)).toHaveTextContent(/55555/i)


});