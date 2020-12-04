import React from "react";
import { render,screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    render(<CheckoutForm />)
    const formHeader = screen.getByText(/checkout form/i)
    expect(formHeader).toBeTruthy();
});

test("form shows success message on submit with form details", () => {
    render(<CheckoutForm/>)
    const firstName = screen.getByLabelText(/First Name/i);
    const lastName = screen.getByLabelText(/Last Name/i);
    const address = screen.getByLabelText(/Address/i);
    const city = screen.getByLabelText(/City/i);
    const state = screen.getByLabelText(/State/i);
    const zip = screen.getByLabelText(/Zip/i);
    const button = screen.getByRole('button');
    const success = screen.findByTestId('successMessage')

    userEvent.type(firstName,'Tyler');
    userEvent.type(lastName,'Matthews');
    userEvent.type(address,'1234 test ave');
    userEvent.type(city,'Test');
    userEvent.type(state,'CA');
    userEvent.type(zip,'00000');
    userEvent.click(button)

    expect(firstName).toBeTruthy();
    expect(lastName).toBeTruthy();
    expect(address).toBeTruthy();
    expect(city).toBeTruthy();
    expect(state).toBeTruthy();
    expect(zip).toBeTruthy();
    expect(success).toBeTruthy();
    
});
