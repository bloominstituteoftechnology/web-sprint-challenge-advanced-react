import React from "react";
import { render, screen } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import userEvent from '@testing-library/user-event'

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {

    render (<CheckoutForm />)

    const headerInput = screen.getByText(/Checkout Form/i)
    expect(headerInput).toBeInTheDocument()
});




test("form shows success message on submit with form details",  async () => {

    render(<CheckoutForm />)

    const firstNameInput = screen.getByLabelText(/first name/i) 
    const lastNameInput = screen.getByLabelText(/last name/i) 
    const addressInput = screen.getByLabelText(/address/i) 
    const cityInput = screen.getByLabelText(/city/i) 
    const stateInput = screen.getByLabelText(/state/i) 
    const zipInput = screen.getByLabelText(/zip/i) 
    

    userEvent.type(firstNameInput, 'Brandon')
    userEvent.type(lastNameInput, 'Santos')
    userEvent.type(addressInput, '365 Blue St')
    userEvent.type(cityInput, 'Westbury')
    userEvent.type(stateInput, 'NYC')
    userEvent.type(zipInput, '11503')

    const submitButton = screen.getByRole('button')
    userEvent.click(submitButton)

    const customerCheckout = await screen.findByText(/You have ordered some plants! woo-hoo!/i);
    expect(customerCheckout).toBeInTheDocument()
});


