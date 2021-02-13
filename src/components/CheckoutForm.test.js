import React from "react";
import { render, screen } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import userEvent from '@testing-library/user-event'

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    render(<CheckoutForm />)
    const header = screen.queryByText(/checkout form/i)
    expect(header).toBeInTheDocument()
});

test("form shows success message on submit with form details", async () => {
    
    render(<CheckoutForm />)

    const firstNameInput = screen.getByLabelText(/first name/i)
    const lastNameInput = screen.getByLabelText(/last name/i)
    const addressInput = screen.getByLabelText(/address/i)
    const cityInput = screen.getByLabelText(/city/i)
    const stateInput = screen.getByLabelText(/state/i)
    const zipInput = screen.getByLabelText(/zip/i)
    const button = screen.getByRole('button')

    userEvent.type(firstNameInput, 'Poison')
    userEvent.type(lastNameInput, 'Ivy')
    userEvent.type(addressInput, '6666 Greenhouse Road')
    userEvent.type(cityInput, 'Gotham')
    userEvent.type(stateInput, 'New York')
    userEvent.type(zipInput, '10013')
    userEvent.click(button)
    
    const success = await screen.getByText(/You have ordered some plants!/i)
    expect(success).toBeInTheDocument()
});
