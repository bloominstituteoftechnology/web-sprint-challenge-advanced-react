import React from "react";
import MutationObserver from 'mutationobserver-shim';
import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("renders without errors", () => {
    render(<CheckoutForm />);
    //screen.debug;
    const form = screen.getByText(/checkout form/i);
    expect(form).toBeInTheDocument();

});

test("shows success message on submit with form details", () => {
    render(<CheckoutForm />);
    
    const {getByLabelText} = screen;
    const first = getByLabelText(/first name/i);
    userEvent.type(first, 'Jason');

    const {getByLabelText} = screen;
    const last = getByLabelText(/last name/i);
    userEvent.type(last, 'Bourne');

    const {getByLabelText} = screen;
    const address = getByLabelText(/address/i);
    userEvent.type(address, '1234 Nottinghill Lane');

    const {getByLabelText} = screen;
    const city = getByLabelText(/city/i);
    userEvent.type(city, 'Paris');

    const {getByLabelText} = screen;
    const state = getByLabelText(/state/i);
    userEvent.type(state, 'France');

    const {getByLabelText} = screen;
    const zip = getByLabelText(/zip/i);
    userEvent.type(state, '902123');

    const button = screen.getByRole("button");
    userEvent.click(button);

    
    //console.log(button)
});
