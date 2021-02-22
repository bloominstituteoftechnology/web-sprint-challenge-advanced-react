import React from "react";
import { render, screen } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import App from '../App';
import userEvent from "@testing-library/user-event";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    render(<App />);

    const header = screen.getByText(/react plants/i);

    expect(header).toBeInTheDocument();
});

test("form shows success message on submit with form details", () => {
    render(<CheckoutForm />);

    const firstName = screen.getByLabelText(/First Name:/i);
    const lastName = screen.getByLabelText(/Last Name:/i);
    const address = screen.getByLabelText(/Address:/i);
    const city = screen.getByLabelText(/City:/i);
    const state = screen.getByLabelText(/State:/i);
    const zip = screen.getByLabelText(/Zip:/i);
    const submit = screen.getByRole('button', { name: /submit/i });

    userEvent.type(firstName, 'Kelsey');
    userEvent.type(lastName, 'Nielsen');
    userEvent.type(address, '123 Address St');
    userEvent.type(city, 'Vernal');
    userEvent.type(state, 'Utah');
    userEvent.type(zip, '84078');
    userEvent.click(submit);

    const firstNameInput = screen.findByText(/Kelsey/i);
    firstNameInput.then(element => {
        expect(element).toBeInTheDocument();
    });

    const successMessage = screen.findByText(/you have ordered some plants/i);
    successMessage.then(element => {
        expect(element).toBeInTheDocument();
    });

    
});
