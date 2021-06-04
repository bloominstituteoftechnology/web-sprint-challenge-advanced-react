// import React from "react";
// import { render } from "@testing-library/react";
// import CheckoutForm from "./CheckoutForm";
//
// // Write up the two tests here and make sure they are testing what the title shows
//
// test("form header renders", () => {});
//
// test("form shows success message on submit with form details", () => {});

import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CheckoutForm from "./CheckoutForm";

test("if header renders on form page", () => {
  render(<CheckoutForm />);

  //Arrange
  const checkoutFormHeader = screen.getByText(/Checkout Form/i);
  const firstName = screen.getByText(/First Name/i);
  const lastName = screen.getByText(/Last Name/i);
  const address = screen.getByText(/Address/i);
  const city = screen.getByText(/City/i);
  const state = screen.getByText(/State/i);
  const zip = screen.getByText(/Zip/i);
  const button = screen.getByRole("button", { name: /checkout/i });

  //Act
  expect(checkoutFormHeader).toBeInTheDocument();
  expect(firstName).toBeInTheDocument();
  expect(lastName).toBeInTheDocument();
  expect(address).toBeInTheDocument();
  expect(city).toBeInTheDocument();
  expect(state).toBeInTheDocument();
  expect(zip).toBeInTheDocument();
  expect(button).toBeInTheDocument();

  //Assert
  expect(checkoutFormHeader).toBeVisible();
  expect(firstName).toBeVisible();
  expect(lastName).toBeVisible();
  expect(address).toBeVisible();
  expect(city).toBeVisible();
  expect(state).toBeVisible();
  expect(zip).toBeVisible();
  expect(button).toBeVisible();
});

test("form displays acknowledgment of sucess on form submit", () => {
  render(<CheckoutForm />);

  //Arrange
  const firstName = screen.getByLabelText(/First Name/i);
  const lastName = screen.getByLabelText(/Last Name/i);
  const address = screen.getByLabelText(/Address/i);
  const city = screen.getByLabelText(/City/i);
  const state = screen.getByLabelText(/State/i);
  const zip = screen.getByLabelText(/Zip/i);
  const button = screen.getByRole("button", { name: /checkout/i });

  //Act
  userEvent.type(firstName, "Tony");
  userEvent.type(lastName, "Miller");
  userEvent.type(address, "3456 Aloha Way");
  userEvent.type(city, "Lahaina");
  userEvent.type(state, "HI");
  userEvent.type(zip, "96814");
  userEvent.click(button);

  //Assert
  const confirmationMessage = screen.getByText(/green friends/i);
  const customerDetails = screen.getByText(/Tony/i);

  expect(confirmationMessage).toBeTruthy();
  expect(customerDetails).toBeTruthy();

  expect(confirmationMessage).toBeVisible();
  expect(customerDetails).toBeVisible();
});
