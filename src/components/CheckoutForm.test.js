import React from "react";
import MutationObserver from 'mutationobserver-shim';
import { render, screen } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import App from "../App";
import userEvent from "@testing-library/user-event";

// Write up the two tests here and make sure they are testing what the title shows

test("renders without errors", () => {
    render(<CheckoutForm />);
    const form = screen.getByTestId(/checkout form/i)
    expect(form).toBeInTheDocument()
    expect(form).toHaveTextContent()
    expect(form).toBeTruthy()
    });

test("shows success message on submit with form details", () => {
    const form = screen.getByTestId(/checkout form/i) 

    const firstName = screen.getByLabelText(/First Name:/i)
    const lastName = screen.getByLabelText(/Last Name:/i)
    const address = screen.getByLabelText(/Address:/i)
    const city = screen.getByLabelText(/City:/i)
    const zipcode = screen.getByLabelText(/Zip:/i)
    const state = screen.getByLabelText(/State:/i)
    const submit = screen.queryByRole('button')

    userEvent.type(firstName, 'Owen')
    userEvent.type(lastName, 'Damron')
    userEvent.type(address, '915 Speight Ave')
    userEvent.type(city, 'Waco')
    userEvent.type(zipcode, '76706')
    userEvent.type(state, 'Texas')
    userEvent.type(submit, 'submit')

    const successMessage = screen.getAllByTestId("successMessage")

    expect(form).toBeInTheDocument()
    expect(successMessage).toBeInTheDocument()
    expect(successMessage).toHaveTextContent()
});