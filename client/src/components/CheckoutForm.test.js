import React from "react";
import { render } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import App from "../App";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
  const { getByTestId } = render(<App />);
  const navv = getByTestId(/navs/i);
  expect(navv).toBeInTheDocument;
});

test("form shows success message on submit with form details", () => {
  const { getByTestId } = render(<CheckoutForm />);
  const success = getByTestId(/successMessage/i);
});
