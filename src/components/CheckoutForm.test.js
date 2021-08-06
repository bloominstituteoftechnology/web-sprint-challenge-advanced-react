import React from "react";
import { render, screen } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import userEvent from "@testing-library/user-event";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    render(<CheckoutForm/>)
    const header= screen.queryByText(/Checkout form/i)
    expect(header).toBeInTheDocument()
});
    

test("form shows success message on submit with form details", () => {
    render(<CheckoutForm/>)

    const firstName= screen.getByLabelText(/first name:/i)
    userEvent.type(firstName, "Bradford")
    const lastName= screen.getByLabelText(/last name:/i)
    userEvent.type(lastName, "Meziere")
    const address= screen.getByLabelText(/Address/i)
    userEvent.type(address, "2108 nw 22nd st.")
    const city= screen.getByLabelText(/city:/i)
    userEvent.type(city, "Oklahoma City")
    const state= screen.getByLabelText(/state:/i)
    userEvent.type(state, "Oklahoma")
    const zip= screen.getByLabelText(/zip:/i)
    userEvent.type(zip, "73107")
    const submitButton= screen.getByRole("button")
    userEvent.click(submitButton)
    
    const successMess= screen.queryByTestId(/successMessage/)
    expect(successMess).toBeInTheDocument()
});
    