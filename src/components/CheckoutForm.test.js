import React from "react";
import { queryByText, render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event'
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    render(<CheckoutForm />)
    const header = screen.queryByRole('heading')
    expect(header).toBeInTheDocument()
    expect(header).toHaveTextContent('Checkout Form')
});

test("form shows success message on submit with form details", () => {
    render(<CheckoutForm />)
    const firstname = 'firstname'
    const lastname = 'lastname'
    const address = '123 Anywhere Pl'
    const city = 'city'
    const state = 'ST'
    const zip = '12345'

    const firstnameInput = screen.getByLabelText(/first name/i)
    userEvent.type(firstnameInput, firstname)

    const lastnameInput = screen.getByLabelText(/last name/i)
    userEvent.type(lastnameInput, lastname)

    const addressInput = screen.getByLabelText(/address/i)
    userEvent.type(addressInput, address)

    const cityInput = screen.getByLabelText(/city/i)
    userEvent.type(cityInput, city)

    const stateInput = screen.getByLabelText(/state/i)
    userEvent.type(stateInput, state)

    const zipInput = screen.getByLabelText(/zip/i)
    userEvent.type(zipInput, zip)

    const submitButton = screen.getByRole('button')
    userEvent.click(submitButton)

    const successMessage = screen.queryByTestId('successMessage')
    expect(successMessage).toBeInTheDocument()

    const nameMessage = queryByText(successMessage, `${firstname} ${lastname}`)
    expect(nameMessage).toBeInTheDocument()

    const addressMessage = queryByText(successMessage, address)
    expect(addressMessage).toBeInTheDocument()

    const cityStateZipMessage = queryByText(successMessage, `${city}, ${state} ${zip}`)
    expect(cityStateZipMessage).toBeInTheDocument()
});
