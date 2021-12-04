import React from "react";
// import MutationObserver from 'mutationobserver-shim';
import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("renders without errors", () => {
    render(<CheckoutForm />);
});

test("shows success message on submit with form details", () => {
    render(<CheckoutForm />);
  
    const firstName = 'Becca';
    const lastName = 'Ogden';
    const address = '5520 W Monroe Concord Rd';
    const city = 'West Milton';
    const state = 'Ohio';
    const zip = '45383';

    const firstNameInput = screen.getByLabelText(/First Name:/i);
    userEvent.type(firstNameInput, firstName);
    const lastNameInput = screen.getByLabelText(/Last Name:/i);
    userEvent.type(lastNameInput, lastName);
    const addressInput = screen.getByLabelText(/Address:/i);
    userEvent.type(addressInput, address);
    const cityInput = screen.getByLabelText(/City:/i);
    userEvent.type(cityInput, city);
    const stateInput = screen.getByLabelText(/State:/i);
    userEvent.type(stateInput, state);
    const zipInput = screen.getByLabelText(/Zip:/i);
    userEvent.type(zipInput, zip);
    
    const submitButton = screen.getByRole('button');
    userEvent.click(submitButton);
  
    const successMessage = screen.getByTestId(/successMessage/i);
    expect(successMessage).toBeInTheDocument();
    expect(successMessage).toBeTruthy();
  });
