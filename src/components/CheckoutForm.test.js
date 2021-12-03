import React from "react";
import MutationObserver from 'mutationobserver-shim';
import { render } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("renders without errors", () => {
    render(<CheckoutForm />);

});

test("shows success message on submit with form details", async () => {render(<CheckoutForm />);    
    const firstNameInput = screen.getByLabelText(/First Name/i);
    const firstName = 'Becca';
    userEvent.type(firstNameInput, firstName);
    
    const lastNameInput = screen.getByLabelText(/last name/i);
    const lastName = 'Ogden';
    userEvent.type(lastNameInput, lastName);
    
    const addressInput = screen.getByLabelText(/address/i);
    const address = '5520 W Monroe Concord Rd';
    userEvent.type(addressInput, address);
    
    const cityInput = screen.getByLabelText(/city/i);
    const city = 'West Milton';
    userEvent.type(cityInput, city);
    
    const stateInput = screen.getByLabelText(/state/i);
    const state = 'Ohio';
    userEvent.type(stateInput, state);
    
    const zipInput = screen.getByLabelText(/zip/i);
    const zip = '45383';
    userEvent.type(zipInput, zip);

    const button = screen.getByRole('button');
    userEvent.click(button);

    await waitFor(() =>
        {
            const successMessageRender = screen.queryByTestId("successMessage");
            const firstNameRender = screen.queryByTestId("firstName");
            const lastNameRender = screen.queryByTestId("lastName");
            const addressRender = screen.queryByTestId("address");
            const cityRender = screen.queryByTestId("city");
            const zipRender = screen.queryByTestId("zip");
        });
    });