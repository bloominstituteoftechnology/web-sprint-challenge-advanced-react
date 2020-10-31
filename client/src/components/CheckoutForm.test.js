import React from "react";
import { render } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    render(<CheckoutForm/>);
});

test("form shows success message on submit with form details", () => {

    const firstNameInput = screen.getByLabelText(/firstName/i);
    const lastNameInput = screen.getByLabelText(/lastName/i);
    const lastNameInput = screen.getByLabelText(/lastName/i);
    const addressInput = screen.getByLabelText(/address/i);
    const cityInput = screen.getByLabelText(/city/i);
    const stateInput = screen.getByLabelText(/state/i);
    const zipInput = screen.getByLabelText(/zip/i);

    fireEvent.change(firstNameInput, { target: { value: 'Brian', name: 'firstName'}});
    fireEvent.change(lastNameInput, { target: { value: 'Abeyta-Pratt', name: 'lastName'}});
    fireEvent.change(addressInput, { target: { value: '10575 Washington Way', name: 'address'}});
    fireEvent.change(cityInput, { target: { value: 'Northglenn', name: 'city'}});
    fireEvent.change(stateInput, { target: { value: 'Colorado', name: 'state'}});
    fireEvent.change(zipInput, { target: { value: '80233', name: 'zip'}});

    const button = screen.getByRole('button');

    fireEvent.click(button);

    const newOrderText = await screen.getByText(/successMessage/i)
    expect(newOrderText).toBeTruthy();
});
