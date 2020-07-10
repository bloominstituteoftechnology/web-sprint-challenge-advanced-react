import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    render(<CheckoutForm/>)
    const header = screen.getByText(/checkout form/i)
    expect(header).toBeInTheDocument
});
test("success message renders details correctly", () => {
    render(<CheckoutForm/>)
    const firstNameInput = screen.getByLabelText(/first name/i)
    fireEvent.change(firstNameInput, {target: {value: 'Thomas'}})
    const checkoutButton = screen.getByPlaceholderText(/checkout/i)
    fireEvent.click(checkoutButton)

    const message = screen.getByText(/thomas/i)
    console.log(message)


})

test("form shows success message on submit with form details", () => {
    render(<CheckoutForm/>)

    const firstNameInput = screen.getByLabelText(/first name/i)
    const lastNameInput = screen.getByLabelText(/last name/i)
    const addressInput = screen.getByLabelText(/last name/i)
    const cityInput = screen.getByLabelText(/city/i)
    const stateInput = screen.getByLabelText(/state/i)
    const zipInput = screen.getByLabelText(/zip/i)
    const checkoutButton = screen.getByPlaceholderText(/checkout/i)

    fireEvent.change(firstNameInput, {target: {value: 'Thomas'}})
    fireEvent.change(lastNameInput, {target: {value: 'BeckingHam'}})
    fireEvent.change(addressInput, {target: {value: '101 1st street'}})
    fireEvent.change(cityInput, {target: {value: 'Ethiopia'}})
    fireEvent.change(stateInput, {target: {value: 'Queens'}})
    fireEvent.change(zipInput, {target: {value: 12321}})
 
    
    
    fireEvent.click(checkoutButton)
    
    const successMessage = screen.findByText(/you have ordered/i)
    expect(successMessage).toBeInTheDocument 
    console.log(successMessage)


});
