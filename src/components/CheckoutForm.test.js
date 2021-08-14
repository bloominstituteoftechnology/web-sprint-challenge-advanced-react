import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event'
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("renders without errors", () => {
    render (<CheckoutForm />)
    const header = screen.getTextById(/checkout form/i)
    expect(header).toBeInTheDocument()
    expect(header).toBeTruthy()
    expect(header).toHaveTextContent(/checkout form/i)
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

    userEvent.type(firstName, 'Tamara')
    userEvent.type(lastName, 'Taylor')
    userEvent.type(address, '6311 Bedford Street')
    userEvent.type(city, 'Harrisburg')
    userEvent.type(state, 'PA')
    userEvent.type(zip, '17111')
    userEvent.click(submitButton)

    const successMessage = document.querySelector("[data-testid = 'successMessage']")

    expect(successMessage).toHaveTextContent(/Tamara Taylor/)
    expect(successMessage).toHaveTextContent(/6311 Bedford Street/)
    expect(successMessage).toHaveTextContent(/Harrisburg/)
    expect(successMessage).toHaveTextContent(/PA/)
    expect(successMessage).toHaveTextContent(/17111/)
});
