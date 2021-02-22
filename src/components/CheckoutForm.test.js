import React from "react";
import { render, screen } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import App from '../App';
import userEvent from "@testing-library/user-event";

test("form header renders", () => {
    render(<App />);

    const header = screen.getByText(/react plants/i);

    expect(header).toBeInTheDocument();
});

test("form shows success message on submit with form details", async () => {
    render(<CheckoutForm />);

    const firstName = screen.getByLabelText(/First Name:/i);
    const lastName = screen.getByLabelText(/Last Name:/i);
    const address = screen.getByLabelText(/Address:/i);
    const city = screen.getByLabelText(/City:/i);
    const state = screen.getByLabelText(/State:/i);
    const zip = screen.getByLabelText(/Zip:/i);
    const checkout = screen.getByRole('button', { name: /checkout/i });

    userEvent.type(firstName, 'Kelsey');
    userEvent.type(lastName, 'Nielsen');
    userEvent.type(address, '123 Address St');
    userEvent.type(city, 'Vernal');
    userEvent.type(state, 'Utah');
    userEvent.type(zip, '84078');
    await userEvent.click(checkout);

    const firstNameInput = screen.getByText(/Kelsey/i);
        expect(firstNameInput).toBeInTheDocument();

    const lastNameInput = screen.getByText(/Nielsen/i);
        expect(lastNameInput).toBeInTheDocument();

    const addressInput = screen.getByText(/123 Address St/i);
        expect(addressInput).toBeInTheDocument();

    const cityInput = screen.getByText(/Vernal/i);
        expect(cityInput).toBeInTheDocument();

    const stateInput = screen.getByText(/Utah/i);
        expect(stateInput).toBeInTheDocument();

    const zipInput = screen.getByText(/84078/i);
        expect(zipInput).toBeInTheDocument();

    const successMessage = screen.getByText(/you have ordered some plants/i);
        expect(successMessage).toBeInTheDocument();

    screen.debug();
    
});
