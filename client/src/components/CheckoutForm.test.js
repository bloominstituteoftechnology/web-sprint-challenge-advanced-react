import React from "react";
import { render, fireEvent } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import "@testing-library/jest-dom/extend-expect";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
  const { getByText } = render(<CheckoutForm />);

  getByText(/Checkout form/i);
});

test("form shows success message on submit with form details", () => {
  const { getByTestId } = render(<CheckoutForm />);

  const button = getByTestId(/button/i);
  fireEvent.click(button);
  getByTestId(/successmessage/i);
});
