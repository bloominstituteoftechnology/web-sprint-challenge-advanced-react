import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    const { getByText } = render();
    const headerElement = getByText(/Checkout Form/i);
    expect(headerElement).toBeInTheDocument();
});

test("form shows success message on submit with form details", () => {
    render(<CheckoutForm />);

    const successMessage = screen.getByTestId(/successMessage/i);
    const button = screen.getByRole("button", { name: /Checkout/i });

    fireEvent.click(button);

    expect(screen.getByTestId(/successMessage/i));
});
