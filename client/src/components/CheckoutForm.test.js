  import React from "react";
import { render, fireEvent } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    const { getByText } = render(<CheckoutForm/>)
    const title = getByText("Checkout Form")
    expect(title).toBeInTheDocument()
});

test("form shows success message on submit with form details", () => {
    const { getByText } = render(<CheckoutForm/>)
    const button = getByText("Checkout")
    fireEvent.click(button);
    const message = getByText("You have ordered some plants! Woo-hoo!")
    expect(message).toBeInTheDocument()
});