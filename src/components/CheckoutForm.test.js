import React from "react";
import MutationObserver from 'mutationobserver-shim';
import { render, screen } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import userEvent from '@testing-library/user-event'

// Write up the two tests here and make sure they are testing what the title shows
    test("renders without errors", () => {
        render(<CheckoutForm />);
        const header = screen.getByText(/Checkout Form/i);
        expect(header).toBeInTheDocument();
    });


test("shows success message on submit with form details", () => {
    render(<CheckoutForm />)
    const firstName = screen.getByLabelText(/First Name/i)
    const lastName = screen.getByLabelText(/Last Name/i)
    const address = screen.getByLabelText(/Address/i)
    const city = screen.getByLabelText(/City/i)
    const state = screen.getByLabelText(/State/i)
    const zip = screen.getByLabelText(/Zip/i)
    const submitButton = document.querySelector('button')

    userEvent.type(firstName, 'Jose')
    userEvent.type(lastName, 'Mercado')
    userEvent.type(address, '123 seasame st')
    userEvent.type(city, 'stockton')
    userEvent.type(state, 'CA')
    userEvent.type(zip, '95207')
    userEvent.click(submitButton)

    const successMessage = document.querySelector("[data-testid = 'successMessage']")

    expect(successMessage).toHaveTextContent(/Jose Mercado/)
    expect(successMessage).toHaveTextContent(/123 seasame st/)
    expect(successMessage).toHaveTextContent(/stockton/)
    expect(successMessage).toHaveTextContent(/CA/)
    expect(successMessage).toHaveTextContent(/95207/)
});
