import React from "react";
import { render, fireEvent } from "@testing-library/react";
import'@testing-library/jest-dom/extend-expect';
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
  const { getByText } = render(<CheckoutForm />)
  const Title = getByText(/Checkout Form/i)
  expect(Title).toBeInTheDocument();
});

test("form shows success message on submit with form details", () => {
   const { getByTestId, } = render(<CheckoutForm />)

   const checkoutSubmit = getByTestId(/successMessage/i)
   expect(checkoutSubmit).toBeInTheDocument();
   fireEvent.click(checkoutSubmit)

   const successMessage = getByTestId(/successMessage/i)
   expect(successMessage).toBeInTheDocument()
});
