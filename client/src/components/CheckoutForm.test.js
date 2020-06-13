import React from "react";
import { render, fireEvent, screen } from "@testing-library/react"
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    const { getByText } = render(<CheckoutForm />)
    const header = getByText(/checkout form/i)
    expect(header).toBeInTheDocument()
})

test("form shows success message on submit with form details", () => {
    render(<CheckoutForm />)
    const firstName = screen.getByLabelText(/first name/i)
    const lastName = screen.getByLabelText(/last name/i)
    const address = screen.getByLabelText(/address/i)
    const city = screen.getByLabelText(/city/i)
    const state = screen.getByLabelText(/state/i)
    const zip = screen.getByLabelText(/zip/i)

    fireEvent.change(firstName, { target: { value: 'Joseph' } })
    fireEvent.change(lastName, { target: { value: 'Kelleher' } })
    fireEvent.change(address, { target: { value: '123 A St' } })
    fireEvent.change(city, { target: { value: 'Philadelphia' } })
    fireEvent.change(state, { target: { value: 'PA' } })
    fireEvent.change(zip, { target: { value: '19145' } })

    expect(firstName.value).toBe('Joseph')
    expect(lastName.value).toBe('Kelleher')
    expect(address.value).toBe('123 A St')
    expect(city.value).toBe('Philadelphia')
    expect(state.value).toBe('PA')
    expect(zip.value).toBe('19145')

    const checkoutButton = screen.getByText('Checkout')
    fireEvent.click(checkoutButton)

    const grabName= screen.getByText(/joseph/i)
    expect(grabName).toBeInTheDocument()

    const success = screen.getByTestId(/successMessage/i)
    expect(success).toBeInTheDocument()
})