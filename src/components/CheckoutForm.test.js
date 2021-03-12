import React from "react";
import {fireEvent, render, screen, waitFor } from '@testing-library/react';
import CheckoutForm from "./CheckoutForm";
import userEvent from '@testing-library/user-event';

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    render(<CheckoutForm />)

});

test("form shows success message on submit with form details", async () => {
    render(<CheckoutForm/>)

    const fN = 'Lucas'
    const lN = 'Nickerbocker'
    const aI = '123 drive st way north'
    const cI = 'UsTown'
    const sI = 'Murica State'
    const zI = '12345'

    const firstNameInput = screen.getByLabelText('First Name:')
    const lastNameInput = screen.getByLabelText('Last Name:')
    const addressInput = screen.getByLabelText('Address:')
    const cityInput = screen.getByLabelText('City:')
    const stateInput = screen.getByLabelText('State:')
    const zipInput = screen.getByLabelText('Zip:')
    const submitBtn = screen.getByRole('button')

    userEvent.type(firstNameInput, fN)
    userEvent.type(lastNameInput, lN)
    userEvent.type(addressInput, aI)
    userEvent.type(cityInput, cI)
    userEvent.type(stateInput, sI)
    userEvent.type(zipInput, zI)
    userEvent.click(submitBtn)

    const successMessageRender = screen.queryByTestId("successMessage")
    expect(successMessageRender).toBeInTheDocument()
    expect(successMessageRender).toHaveTextContent('Your new green friends will be shipped to:')
    


});
