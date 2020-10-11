import React from "react";
import { fireEvent, getAllByTestId, getByText, render, screen } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    render(<CheckoutForm />)
    const header = screen.getByText(/Checkout Form/)
    expect(header).toBeInTheDocument();
});

test("form shows success message on submit with form details", () => {
    render(<CheckoutForm />)
    const element = screen.getAllByTestId('successMessage')
    fireEvent.click(getByText('Checkout', element))

});
