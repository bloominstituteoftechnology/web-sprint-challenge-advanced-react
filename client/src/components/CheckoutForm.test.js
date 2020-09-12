import { render, fireEvent } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import React from "react";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
  const { getByText } = render(<CheckoutForm />);
  const Header = getByText("Checkout Form");
  expect(Header).toBeInTheDocument;
});

test("form shows success message on submit with form details", () => {
  const { getByText, getByTestId } = render(<CheckoutForm />);
  const button = getByText("Checkout");
  fireEvent.click(button);
  const success = getByTestId("successMessage");
  expect(success).toBeInTheDocument;
});
