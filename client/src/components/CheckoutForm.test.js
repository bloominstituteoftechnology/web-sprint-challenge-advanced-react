import React from "react";
import { render, fireEvent } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {});

test("form shows success message on submit with form details", () => {});

test("renders the app header", () => {
  const { getByText } = render(<CheckoutForm />);

  const header = getByText(/checkout form/i);

  expect(header).toBeInTheDocument();
});
test("fire events", () => {
  const { getByLabelText } = render(<CheckoutForm />);
  fireEvent.change(getByLabelText(/first name/i), {
    target: { value: "david" },
  });
});
