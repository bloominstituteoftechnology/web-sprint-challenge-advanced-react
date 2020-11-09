import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";


// Test the form

test('form renders', () => {
  render(<CheckoutForm />);
})

test('form shows success message on submit with form details', async()  => {
    render(<CheckoutForm />);
    const firstName = screen.getByLabelText(/First Name/i)
    const lastName = screen.getByLabelText(/Last Name/i)
    const address = screen.getByLabelText(/Address/i)
    const city = screen.getByLabelText(/City/i)

// Events
    fireEvent.change(firstName, { target:  {value: 'Willy'}})
    fireEvent.change(lastName, {target: {value: 'Neals'}});
    fireEvent.change(address, {target: {value: '23332 Chestnut Grove Rd'}});
    fireEvent.change(city, { target:  {value: 'Alabama'}})
// VAlues within those inputs
    expect(firstName).toHaveValue('Willy')
    expect(lastName).toHaveValue('Neals')
    expect(address).toHaveValue('23332 Chestnut Grove Rd')
    expect(city).toHaveValue('Alabama')

    const button = screen.getByRole("button", { name: /Checkout/i });
    fireEvent.click(button);
// Asynced names
   
    const aFirst = await screen.findAllByText(/First/i)
    const aLast = await screen.findAllByText(/last name/i)

    expect(aFirst).toBeTruthy();
    expect(aLast).toBeTruthy();


})
  