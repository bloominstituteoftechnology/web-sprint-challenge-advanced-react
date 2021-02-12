import React from "react";
import { render, screen } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import userEvent from "@testing-library/user-event";

// Write up the two tests here and make sure they are testing what the title shows
test("form header renders", async () => {
  render(<CheckoutForm />);
  const header = screen.getByText(/Checkout Form/i);
  expect(header).toBeInTheDocument();
});

test("form shows success message on submit with form details", async () => {
  render(<CheckoutForm />);

  const firstNameInput = screen.getByLabelText(/First Name/i);
  const lastNameInput = screen.getByLabelText(/Last Name/i);
  const addressInput = screen.getByLabelText(/address/i);
  const cityInput = screen.getByLabelText(/city/i);
  const stateInput = screen.getByLabelText(/state/i);
  const zipInput = screen.getByLabelText(/zip/i);

  userEvent.type(firstNameInput, "daniel");
  userEvent.type(lastNameInput, "wright");
  userEvent.type(addressInput, "639 w st");
  userEvent.type(cityInput, "rockport");
  userEvent.type(stateInput, "maine");
  userEvent.type(zipInput, "04856");

  const button = screen.getByRole("button");
  userEvent.click(button);

  const newName = await screen.findByText(/daniel/i);
  const newLastName = await screen.findByText(/wright/i);
  const newAddress = await screen.findByText(/639 w st/i);
  const newCity = await screen.findByText(/rockport/i);
  const newState = await screen.findByText(/maine/i);
  const newZip = await screen.findByText(/04856/i);

  expect(newName).toBeInTheDocument();
  expect(newLastName).toBeInTheDocument();
  expect(newAddress).toBeInTheDocument();
  expect(newCity).toBeInTheDocument();
  expect(newState).toBeInTheDocument();
  expect(newZip).toBeInTheDocument();
});
