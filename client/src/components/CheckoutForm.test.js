import React from "react";
import {  render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event'
import CheckoutForm from "./CheckoutForm";
import App from '../App.js'

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
   render(<App/>)

   const header = screen.getByText(/React Plants/i)
    expect(header).toBeTruthy();
});

test("form shows success message on submit with form details", () => {
    render(<CheckoutForm />)
    
    const button = screen.getByRole('button');
    userEvent.click(button);
    expect(button).toBeTruthy()
    const form = screen.getByTestId('successMessage')
    expect(form).toBeTruthy()
    
});
