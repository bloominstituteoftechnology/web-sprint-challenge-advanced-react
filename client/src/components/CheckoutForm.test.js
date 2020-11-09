import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import ShoppingCart from "./ShoppingCart";
import App from "../App";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    render(<App />)
});

test("form shows success message on submit with form details", async () => {
render(<ShoppingCart />);
const submitButton = screen.getByText(/Checkout/i);
fireEvent.click(submitButton)
;
const successCard = screen.getByTestId(".checkout");
expect(successCard).toBeInDocument();
});
