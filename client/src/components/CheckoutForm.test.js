import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    render(<CheckoutForm/>)

    const header = screen.getByText(/Checkout Form/i)
    expect(header).toBeInTheDocument()
});

test("form shows success message on submit with form details", async () => {
    render(<CheckoutForm/>)

    const firstNameInput = screen.getByLabelText(/First Name:/i)

    fireEvent.change(firstNameInput, {target: {value: 'Austin'}})

    expect(firstNameInput).toHaveValue('Austin')

    const button = screen.getByRole("button", {name: /Checkout/i})
    fireEvent.click(button)

    const nameConfirm = await screen.findByText(/Austin/i)
    expect(nameConfirm).toBeTruthy()
    expect(nameConfirm).toHaveTextContent(/Austin/)

});
