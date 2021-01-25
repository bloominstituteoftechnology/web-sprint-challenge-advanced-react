import React from "react";
import { render, fireEvent } from "@testing-library/react";
import App from "../App";
import CheckoutForm from "./CheckoutForm";
import ShoppingCart from "./ShoppingCart";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
  render(<App />);
});

test("form shows success message on submit with form details", async () => {
  const { getByText, getByTestId, queryByText } = render(<CheckoutForm />);

  const submitButton = getByTestId("checkoutButton");

  fireEvent.click(submitButton);

  // const successCard = getByTestId("successMessage");

  // expect(successCard).toBeInDocument();

  expect(queryByText("ordered")).toBeInDocument();
});
