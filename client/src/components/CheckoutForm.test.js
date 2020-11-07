import React from "react";
import {  fireEvent, render, screen, } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    (<CheckoutForm />)
});

test("form shows success message on submit with form details",async () => {
    render(<CheckoutForm />)

    const firstNameInput = screen.getByLabelText(/first name:/i)
    const lastNameInput = screen.getByLabelText(/last name:/i)
    const addressInput = screen.getByLabelText(/address:/i)
    const cityInput = screen.getByLabelText(/city:/i)
    const stateInput = screen.getByLabelText(/state:/i)
    const zipInput = screen.getByLabelText(/zip:/i)
    const submitButton = screen.getByTestId("successButton")

    fireEvent.change(firstNameInput, {target: {value: 'Nacho' }})
    fireEvent.change(lastNameInput, {target: {value: 'Cheese'}})
    fireEvent.change(addressInput, {target: {value: 'Jalepeno ave'}})
    fireEvent.change(cityInput, {target: {value: 'Atlanta'}})
    fireEvent.change(stateInput, {target: {value: 'GA'}})
    fireEvent.change(zipInput, {target: {value: '30032'}})
    fireEvent.click(submitButton);

    expect(firstNameInput).toHaveValue('Nacho')
    expect(lastNameInput).toHaveValue('Cheese')
    expect(addressInput).toHaveValue('Jalepeno ave')
    expect(cityInput).toHaveValue('Atlanta')
    expect(stateInput).toHaveValue('GA')
    expect(zipInput).toHaveValue('30032')


});
