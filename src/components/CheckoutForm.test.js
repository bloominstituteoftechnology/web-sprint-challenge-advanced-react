import React from "react";
import { render, screen } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import userEvent from '@testing-library/user-event';
// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    render(<CheckoutForm />);

    const header = document.querySelector('form');

    expect(header).toBeInTheDocument();
    expect(header).toHaveTextContent(/checkout form/i);
});

test("form shows success message on submit with form details", () => {
    render(<CheckoutForm />);

    const firstName = screen.getByLabelText(/first name:/i);
    const lastName = screen.getByLabelText(/last name:/i);
    const address = screen.getByLabelText(/address:/i);
    const city = screen.getByLabelText(/city:/i);
    const state = screen.getByLabelText(/state:/i);
    const zip = screen.getByLabelText(/zip:/i);
    const checkoutButton = screen.getByRole('button');


    userEvent.type(firstName, 'Muffin');
    userEvent.type(lastName, 'Man');
    userEvent.type(address, '1234 Drury Ln.');
    userEvent.type(city, 'The Kingdom of Far Far Away');
    userEvent.type(state, 'Once Upon a Time');
    userEvent.type(zip, '90210');
    userEvent.click(checkoutButton);


    const successMessage = document.querySelector('.success-message');
    expect(successMessage).toBeInTheDocument();
});
