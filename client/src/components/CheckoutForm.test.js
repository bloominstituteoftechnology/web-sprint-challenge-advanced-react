import React from "react";
import { render, fireEvent, queryByAttribute } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    const {getByText} = render(<CheckoutForm />)
    const header = getByText("Checkout Form")
    expect(header).toBeTruthy()
});

test("form shows success message on submit with form details", () => {
    const { getByText, getByRole, container } = render(<CheckoutForm />)
    const button = getByRole("button", {name: "Checkout"})
    fireEvent(button, new MouseEvent("click"))
    const success = container.querySelector(".success-message")
    expect(success).toBeTruthy();
});
//done