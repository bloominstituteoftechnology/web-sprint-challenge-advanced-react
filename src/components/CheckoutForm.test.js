import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from '@testing-library/user-event'
import MutationObserver from 'mutationobserver-shim';
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    render(<CheckoutForm />);

    const header = screen.queryByText(/checkout form/i)

    expect(header).toBeInTheDocument();
});

test("form shows success message on submit with form details", async () => {
    render(<CheckoutForm />);

    const firstNameField = screen.getByLabelText(/first name/i);
    userEvent.type(firstNameField, 'Maruchan');

    const lastNameField = screen.getByLabelText(/last name/i);
    userEvent.type(lastNameField, 'Noodles');

    const addressField = screen.getByLabelText(/address/i);
    userEvent.type(addressField, '123 Souper Meal Lane');

    const city = screen.getByLabelText(/city/i);
    userEvent.type(city, 'Bowl-der');

    const state = screen.getByLabelText(/state/i);
    userEvent.type(state, "Colorado");

    const zip = screen.getByLabelText(/zip/i);
    userEvent.type(zip, '40097');


    const submitButton = screen.getByRole('button');
    userEvent.click(submitButton);

    await waitFor(() => {

        const results = screen.getByTestId('successMessage');
        expect(results).toBeInTheDocument();
    });


});
