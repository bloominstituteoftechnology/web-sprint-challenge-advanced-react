import React from "react";
import MutationObserver from 'mutationobserver-shim';
import { screen, render ,waitFor} from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import userEvent from '@testing-library/user-event';

// Write up the two tests here and make sure they are testing what the title shows

test("renders without errors", () => {
    render(<CheckoutForm />);
});

test("shows success message on submit with form details", async () => {
    render(<CheckoutForm />);
    const firstNameField = screen.getByLabelText(/First Name:/i);
    const lastNameField = screen.getByLabelText(/Last Name:/i);
    const addressField = screen.getByLabelText(/Address:/i);
    const cityField = screen.getByLabelText(/City:/i);
    const stateField = screen.getByLabelText(/State:/i);
    const zipField = screen.getByLabelText(/Zip:/i);

    userEvent.type(firstNameField,"Mabyy");
    userEvent.type(lastNameField,"Lambda");
    userEvent.type(addressField,"123MiamiStreet");
    userEvent.type(cityField,"Miami");
    userEvent.type(stateField,"Florida");
    userEvent.type(zipField,"123456");
    
    const button = screen.getByRole("button");
    userEvent.click(button);

  
    await waitFor(()=>{
        const successMessages = screen.queryByTestId("successMessage");
        expect(successMessages).toBeInTheDocument();
    })


});
