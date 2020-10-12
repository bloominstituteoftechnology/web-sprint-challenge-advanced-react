import React from "react";
import { render, fireEvent } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
      render(<CheckoutForm />);
});

test("form shows success message on submit with form details", () => {
    const utils = render(<CheckoutForm />);
    const firstNameInput = utils.getByPlaceholderText(/firstName/i);
    const lastNameInput = utils.getByPlaceholderText(/lastName/i);
    const addressInput = utils.getByPlaceholderText(/address/i);
    const cityInput = utils.getByPlaceholderText(/city/i);
    const stateInput = utils.getByPlaceholderText(/state/i);
    const zipInput = utils.getByPlaceholderText(/zip/i);

    fireEvent.change(firstNameInput, { target: {value: 'Colin Crab'}});
    fireEvent.change(lastNameInput, { target: {value: 'Dangos'}});
    fireEvent.change(addressInput, { target: {value: 'address'}});
    fireEvent.change(cityInput, { target: {value: 'dallas'}});
    fireEvent.change(stateInput, { target: {value: 'Texas'}});
    fireEvent.change(zipInput, { target: {value: '1564564'}});

    expect(firstNameInput.value).toBe('Colin Crab');
    expect(lastNameInput.value).toBe('Dangos');
    expect(addressInput.value).toBe('address');
    expect(cityInput.value).toBe('dallas');
    expect(stateInput.value).toBe('Texas');
    expect(zipInput.value).toBe('1564564');

});
