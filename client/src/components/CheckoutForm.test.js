import React from "react";
import { render,screen,fireEvent } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import userEvent from '@testing-library/user-event'

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    render(<CheckoutForm/>)
    
    const fnameInput = screen.getByLabelText(/first name/i)
    const lnameInput = screen.getByLabelText(/last name/i)
    const addressInput = screen.getByLabelText(/address/i)
    const cityInput = screen.getByLabelText(/city/i)
    const stateInput = screen.getByLabelText(/state/i)
    const zipInput = screen.getByLabelText(/zip/i)

    userEvent.type(fnameInput,'someone')
    userEvent.type(lnameInput,'someonelastName')
    userEvent.type(addressInput,'somewhere')
    userEvent.type(cityInput,'somewhereCity')
    userEvent.type(stateInput,'somewhereState')
    userEvent.type(zipInput,'somwhereZip')

    expect(fnameInput.value).toEqual("someone")
    expect(lnameInput.value).toEqual('someonelastName')
    expect(addressInput.value).toEqual('somewhere')
    expect(cityInput.value).toEqual('somewhereCity')
    expect(stateInput.value).toEqual('somewhereState')
    expect(zipInput.value).toEqual('somwhereZip')
});

test("form shows success message on submit with form details", () => {
    render(<CheckoutForm/>)

    const fnameInput = screen.getByLabelText(/first name/i)
    const lnameInput = screen.getByLabelText(/last name/i)
    const addressInput = screen.getByLabelText(/address/i)
    const cityInput = screen.getByLabelText(/city/i)
    const stateInput = screen.getByLabelText(/state/i)
    const zipInput = screen.getByLabelText(/zip/i)

    userEvent.type(fnameInput,'someone')
    userEvent.type(lnameInput,'someonelastName')
    userEvent.type(addressInput,'somewhere')
    userEvent.type(cityInput,'somewhereCity')
    userEvent.type(stateInput,'somewhereState')
    userEvent.type(zipInput,'somwhereZip')

    const checkoutButton = screen.getByRole('button')
    userEvent.click(checkoutButton)
    
    const checkoutFname = screen.queryByText(/someone/i)
    const successMessage= screen.queryByTestId(/successMessage/i);

    expect(checkoutFname).toBeInTheDocument(successMessage)
   expect(successMessage).toBeInTheDocument()
});
