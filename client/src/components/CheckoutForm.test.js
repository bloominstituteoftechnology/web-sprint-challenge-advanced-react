import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    render(<CheckoutForm />);

    const header = screen.getByText(/checkout form/i);

    expect(header.textContent).toBe('Checkout Form')
});

test("form shows success message on submit with form details", async () => {
    render(<CheckoutForm/>);

    const firstName = screen.getByLabelText(/first name/i);
    const lastName = screen.getByLabelText(/last name/i);
    const address = screen.getByLabelText(/address/i);
    const city = screen.getByLabelText(/city/i);
    const state = screen.getByLabelText(/state/i);
    const zip = screen.getByLabelText(/zip/i);

    userEvent.type(firstName, 'aoeu');
    userEvent.type(lastName, 'aoeu');
    userEvent.type(address, 'aoeu');
    userEvent.type(city, 'aoeu');
    userEvent.type(state, 'aoeu');
    userEvent.type(zip, 'aoeu');

    const checkoutButton = screen.getByRole('button');
    userEvent.click(checkoutButton);

    const successMessage = await screen.findByTestId("successMessage");

    const details = await screen.findAllByText(/aoeu/i);

    expect(successMessage).toBeDefined();
    expect(details).toHaveLength(3);

});
