import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows
test ('renders the CheckoutForm component without errors', () => {
  render(<CheckoutForm />)
})


test("form header renders", () => {
  render(<CheckoutForm />);
  const header = screen.queryByText(/checkout form/i);
  expect(header).toBeInTheDocument();
  //sanity check
  expect(header).toBeTruthy();
  expect(header).toBeVisible();
})

test("form shows success message on submit with form details", async () => {
  render(<CheckoutForm />)
  const firstNameInput = screen.getByLabelText(/first name/i);
  const lastNameInput = screen.getByLabelText(/last name/i);
  const addressInput = screen.getByLabelText(/address/i);
  const cityInput = screen.getByLabelText(/city/i);
  const stateInput = screen.getByLabelText(/state/i);
  const zipInput = screen.getByLabelText(/zip/i);
  const checkoutButton = screen.getByRole('button', { name: /checkout/i });
  

  userEvent.type(firstNameInput, 'Daniel');
  userEvent.type(lastNameInput, 'Vazquez');
  userEvent.type(addressInput, '555 W Main St');
  userEvent.type(cityInput, 'Phoenix');
  userEvent.type(stateInput, 'AZ');
  userEvent.type(zipInput, '85041')
  userEvent.click(checkoutButton);

  const successMessage = await screen.queryByText(/you have ordered some plants/i);
  expect(successMessage).toBeInTheDocument();
  //sanity check
  expect(successMessage).toBeTruthy();
  expect(successMessage).toBeVisible();


  //3/3 TESTS PASSED ✅✅✅//
})
