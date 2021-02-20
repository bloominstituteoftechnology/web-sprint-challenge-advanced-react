import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
  render(<CheckoutForm/>);
  // Arrange
  const checkoutFormHeader = screen.getByText(/Checkout Form/i);
  const firstName = screen.getByLabelText(/First Name/i);
  const lastName = screen.getByLabelText(/Last Name/i);
  const address = screen.getByLabelText(/Address/i);
  const city = screen.getByLabelText(/City/i);
  const state = screen.getByLabelText(/State/i);
  const zip = screen.getByLabelText(/Zip/i);
  const checkoutButton = screen.getByRole("button", { name: /checkout/i });
  // Act

  // Assert
  expect(checkoutFormHeader).toBeInTheDocument();
  expect(firstName).toBeInTheDocument();
  expect(lastName).toBeInTheDocument();
  expect(address).toBeInTheDocument();
  expect(city).toBeInTheDocument();
  expect(state).toBeInTheDocument();
  expect(zip).toBeInTheDocument();
  expect(checkoutButton).toBeInTheDocument();

  expect(checkoutFormHeader).toBeVisible();
  expect(firstName).toBeVisible();
  expect(lastName).toBeVisible();
  expect(address).toBeVisible();
  expect(city).toBeVisible();
  expect(state).toBeVisible();
  expect(zip).toBeVisible();
  expect(checkoutButton).toBeVisible();
});

test("form shows success message on submit with form details", () => {
  render(<CheckoutForm/>);
  // Arrange
  const firstName = screen.getByLabelText(/First Name/i);
  const lastName = screen.getByLabelText(/Last Name/i);
  const address = screen.getByLabelText(/Address/i);
  const city = screen.getByLabelText(/City/i);
  const state = screen.getByLabelText(/State/i);
  const zip = screen.getByLabelText(/Zip/i);
  const checkoutButton = screen.getByRole("button", { name: /checkout/i });
  // Act
  userEvent.type(firstName, "Rhiannon");
  userEvent.type(lastName, "Stanford");
  userEvent.type(address, "1234 Street");
  userEvent.type(city, "Honolulu");
  userEvent.type(state, "Hawaii");
  userEvent.type(zip, "12345");
  userEvent.click(checkoutButton);
  // Assert
  const success = screen.getByText(/woo-hoo/i);
  const newUser = screen.getByText(/Rhiannon/i);

    expect(success).toBeTruthy();
    expect(success).toBeInTheDocument();
    expect(success).toBeVisible();

    expect(newUser).toBeTruthy();
    expect(newUser).toBeInTheDocument();
    expect(newUser).toBeVisible();

});
