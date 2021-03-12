import React from "react";
import { render, screen } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import userEvent from "@testing-library/user-event";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
  const { debug } = render(<CheckoutForm />);
  debug();

  const header = screen.getByText(/checkout form/i);

  expect(header).toBeInTheDocument();
});

test("form shows success message on submit with form details", async () => {
  render(<CheckoutForm />);

  const firstName = screen.getByLabelText("First Name:");
  userEvent.type(firstName, "Muffin");

  const lastName = screen.getByLabelText("Last Name:");
  userEvent.type(lastName, "Man");

  const address = screen.getByLabelText("Address:");
  userEvent.type(address, "32 Drury Lane");

  const city = screen.getByLabelText("City:");
  userEvent.type(city, "Candyland");

  const state = screen.getByLabelText("State:");
  userEvent.type(state, "CandyWorld");

  const zipcode = screen.getByLabelText("Zip:");
  userEvent.type(zipcode, "11111");

  const submitButton = screen.getByRole("button");
  userEvent.click(submitButton);

  const successMessage = await screen.getByTestId("successMessage");

  expect(successMessage).toBeVisible();
});
