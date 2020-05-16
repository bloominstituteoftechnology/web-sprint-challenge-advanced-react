import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
  const { getByTestId } = render(<CheckoutForm />);
  const checkout = "Checkout Form";
  const headerElem = getByTestId("header");
  expect(headerElem.textContent).toBe(checkout);
});

test("form shows success message on submit with form details", async () => {
  const { getByTestId } = render(<CheckoutForm />);
  const submitBtn = getByTestId("submit");

  fireEvent.click(submitBtn);
  let message = await getByTestId("successMessage");
  expect(message.textContent).toBe("You have ordered some plants! Woo-hoo! 🎉Your new green friends will be shipped to: ,  ");
});
