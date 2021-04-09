import React from "react";
import { render, screen } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import userEvent from "@testing-library/user-event";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
  render(<CheckoutForm />);

  const header = screen.getByText("Checkout Form");

  expect(header).toBeInTheDocument();
});

test("form shows success message on submit with form details", async () => {
  render(<CheckoutForm />);

  const name = screen.getByLabelText("First Name:");
  const address = screen.getByLabelText("Address:");
  const city = screen.getByLabelText("City:");
  const state = screen.getByLabelText("State:");
  const zip = screen.getByLabelText("Zip:");
  const btn = screen.getByRole("button");

  userEvent.type(name, "ALDO");
  userEvent.type(address, "Main st.");
  userEvent.type(city, "San Diego");
  userEvent.type(state, "CA");
  userEvent.type(zip, "92692");
  userEvent.click(btn);

  const submittedSuccess = await screen.getByText(
    "You have ordered some plants! Woo-hoo!"
  );

  expect(submittedSuccess).toBeVisible();
});
