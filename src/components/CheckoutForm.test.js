import React from "react";
import { render, screen } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import userEvent from "@testing-library/user-event";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
  render(<CheckoutForm />);
  const header = screen.getByText(/checkout form/i);
  expect(header).toHaveContext("Chekcout Form");
});

test("form shows success message on submit with form details", () => {
  render(<CheckoutForm />);

  const firstName = screen.getByLabelText(/first name/i);
  userEvent.type(firstName, "Craig");
  expect(firstName).toHaveValue("Craig");

  const lastName = screen.getByLabelText(/last name/i);
  userEvent.type(lastName, "Barcinas");
  expect(lastName).toHaveValue("Barcinas");

  const address = screen.getByLabelText(/address/i);
  userEvent.type(address, "1234 test street");
  expect(address).toHaveValue("1234 test street");

  const city = screen.getByLabelText(/city/i);
  userEvent.type(city, "las vegas");
  expect(city).toHaveValue("las vegas");

  const state = screen.getByLabelText(/state/i);
  userEvent.type(state, "nv");
  expect(state).toHaveValue("nv");

  const zip = screen.getByLabelText(/zip/i);
  userEvent.type(zip, "123456");
  expect(zip).toHaveValue("123456");

  const button = screen.getByRole("button");
  userEvent.click(button);

  const success = screen.getByTestId(/successMessage/i);
  expect(success).toBeInTheDocument();

  screen.debug();
});
