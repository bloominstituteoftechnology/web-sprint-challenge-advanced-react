import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    render(<CheckoutForm/>)

    const header = screen.getByText(/checkout form/i)

    expect(header).toBeInTheDocument()
});

test("form shows success message on submit with form details", () => {
    render(<CheckoutForm/>)

    const firstNameInput = screen.getByLabelText(/first name:/i)
    const lastNameInput = screen.getByLabelText(/last name:/i)
    const addressInput = screen.getByLabelText(/address:/i)
    const cityInput = screen.getByLabelText(/city:/i)
    const stateInput = screen.getByLabelText(/state:/i)
    const zipInput = screen.getByLabelText(/zip:/i)

    fireEvent.change(firstNameInput, {target: {value: 'Tori' }})
    fireEvent.change(lastNameInput, {target: {value: 'Spelling'}} )
    fireEvent.change(addressInput, {target: {value: '1 Rodeo Drive'}})
    fireEvent.change(cityInput, {target: {value: 'Beverly Hills'}})
    fireEvent.change(stateInput, {target: {value: 'CA'}})
    fireEvent.change(zipInput, {target: {value: '90210'}})

    const submitBtn = screen.getByRole('button', {name: /checkout/i})

    fireEvent.click(submitBtn)

    expect(screen.getByText(/woo-hoo/i)).toBeInTheDocument()
});

//testing for failure

// test("form shows success message on submit with form details", () => {
//     render(<CheckoutForm/>)

//     const firstNameInput = screen.getByLabelText(/first name:/i)
//     const lastNameInput = screen.getByLabelText(/last name:/i)
//     const addressInput = screen.getByLabelText(/address:/i)
//     const cityInput = screen.getByLabelText(/city:/i)
//     const stateInput = screen.getByLabelText(/state:/i)
//     const zipInput = screen.getByLabelText(/zip:/i)

//     fireEvent.change(firstNameInput, {target: {value: 'Tori' }})
//     fireEvent.change(lastNameInput, {target: {value: 'Spelling'}} )
//     fireEvent.change(addressInput, {target: {value: '1 Rodeo Drive'}})
//     fireEvent.change(cityInput, {target: {value: 'Beverly Hills'}})
//     fireEvent.change(stateInput, {target: {value: 'CA'}})
//     fireEvent.change(zipInput, {target: {value: '90210'}})

//     const submitBtn = screen.getByRole('button', {name: /checkout/i})

//     fireEvent.click(submitBtn)

//     expect(screen.getByText(/intentional error/i)).toBeInTheDocument()
// });