import React from "react";
import { render, fireEvent, getByText, getByTestId } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
     const { getByText } = render(<CheckoutForm />)
     const formHeader = getByText(/checkout form/i)
     expect(formHeader).toBeInTheDocument()
});

test("form shows success message on submit with form details", () => {
     const { getByTestId, getByLabelText } = render (<CheckoutForm />)

     const checkoutButton = getByTestId('checkoutButton')
     fireEvent.click(checkoutButton)

     const successMessage = getByTestId('successMessage')
     expect(successMessage).toBeInTheDocument()





});
