import React from "react";
import { render, fireEvent } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import { Simulate } from "react-dom/test-utils";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
  const { getByText } = render(<CheckoutForm />);

  getByText(/Checkout Form/i);
});

test("form shows success message on submit with form details", () => {
  const { getByText, getByTestId } = render(<CheckoutForm />);

  const submitButton = getByText("Checkout");

  Simulate.submit(submitButton);

  getByTestId(/successMessage/i);
});
