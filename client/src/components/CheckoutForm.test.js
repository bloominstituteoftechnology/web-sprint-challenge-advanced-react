import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
  render(<CheckoutForm />)
  const checkoutHeader = screen.getByRole('heading')
  const checkoutHeaderText = screen.getByText('Checkout Form')
});

test("form shows success message on submit with form details", () => {
  render(<CheckoutForm />)
  const submit = screen.queryByRole('button')
  fireEvent.click(submit)
});
