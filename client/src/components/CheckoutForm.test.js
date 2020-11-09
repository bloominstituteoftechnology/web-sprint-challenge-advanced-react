import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
// import { screen } from "@testing-library/dom";
import App from "../App";
import CheckoutForm from "./CheckoutForm";
import ShoppingCart from "./ShoppingCart";
import userEvent from "@testing-library/user-event";

// Write up the two tests here and make sure they are testing what the title shows

// Is this what this is asking for? Or
test("form header renders", () => {
  render(<App />);
});

test("form shows success message on submit with form details", () => {
  render(<ShoppingCart />);
  const submitButton = screen.getByText(/Checkout/i);
  fireEvent.click(submitButton);

  const successCard = screen.getByTestId(".checkout");
  expect(successCard).toBeInTheDocument();
});
