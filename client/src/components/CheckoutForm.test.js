import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    render(<CheckoutForm />);
    const header = screen.getByText(/Checkout Form/i);
    expect(header).toBeTruthy();
});

test("form shows success message on submit with form details", () => {
    render(<CheckoutForm />);

    const button = screen.getByRole("button", { name: /Checkout/i });
    fireEvent.click(button);
    const successMessage = screen.getByTestId(/successMessage/i);

    expect(screen.getByTestId(/successMessage/i));
});
