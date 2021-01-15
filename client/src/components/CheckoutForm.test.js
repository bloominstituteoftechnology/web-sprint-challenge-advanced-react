import React from "react";
import { render, screen } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import userEvent from '@testing-library/user-event';

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    render(<CheckoutForm/>)
    const formHeader = screen.queryByText(/checkout form/i);
    expect(formHeader).toBeInTheDocument();
    
});

test("form shows success message on submit with form details", async () => {
    // Put data into forms
    
    render(<CheckoutForm/>)
    const firstName = screen.getByLabelText(/First Name:/i);
    userEvent.type(firstName, 'Louis');

    userEvent.type(screen.getByLabelText(/last name/i), 'Boois' )
    userEvent.type(screen.getByLabelText(/address/i), 'Mulholland Drive' )
    userEvent.type(screen.getByLabelText(/city/i),'Eden' )
    userEvent.type(screen.getByLabelText(/state/i), 'wyoming' )
    userEvent.type(screen.getByLabelText(/zip/i), '80909')
    
    // Hit submit button
    userEvent.click(screen.getByRole('button'));

    // await* success message
    const successMessage = await screen.findByTestId('successMessage')
    // check to see if form details are present
    expect(successMessage).toBeInTheDocument();
    const formDetailsSuccessMessage = screen.findAllByTestId('formValuesDisplayed')
    // expect(formDetailsSuccessMessage).toBeInTheDocument();
    console.log(formDetailsSuccessMessage);
});
