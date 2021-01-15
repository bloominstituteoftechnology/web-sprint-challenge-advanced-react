import React from "react";
import userEvent from '@testing-library/user-event'
import { render, screen } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
  // Arrange
  render(<CheckoutForm />)
  // ACT
  const headerTitle = screen.getByText(/checkout form/i)
  // Assert
  expect(headerTitle).toBeInTheDocument()

});

test("form shows success message on submit with form details",  () => {
  // Arrange
  render(<CheckoutForm />)
  // ACT
  const firstNameInput = screen.getByTestId(/nameFirst/i)
  const lastNameInput = screen.getByTestId(/lastName/i)
  const addressInput = screen.getByTestId(/address/i)
  const cityInput = screen.getByTestId(/city/i)
  const stateInput = screen.getByTestId(/state/i)
  const zipInput = screen.getByTestId(/zip/i)
  const button = screen.getByText('Checkout')


  userEvent.type(firstNameInput, 'Poopy')
  userEvent.type(lastNameInput, 'Pop')
  userEvent.type(addressInput, 'home town ave')
  userEvent.type(cityInput, 'Bass')
  userEvent.type(stateInput, 'NO')
  userEvent.type(zipInput, '032166')

  userEvent.click(button)


  // Assert

  const successMessage = screen.getByTestId(/successMessage/i);
  expect(successMessage).toBeInTheDocument();


});
