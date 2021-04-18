import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows
test ("component CheckoutForm renders", () => {
    render(<CheckoutForm/>);

});

test("form header renders", () => {
    render(<CheckoutForm />);
    const header = screen.getByText(/Checkout Form/i);

    expect(header).toBeVisible();
    expect(header).toHaveTextContent('Checkout Form');
});

test("form shows success message on submit with form details", () => {
    render(<CheckoutForm/>);
    const submitButton = screen.getByRole("button", { value: /Checkout/i});
    expect(submitButton).not.toBeDisabled();
    
    userEvent.click(submitButton);
});
