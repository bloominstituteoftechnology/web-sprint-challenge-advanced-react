import React from "react";
import { screen, render } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    render(<CheckoutForm />);

    const firstName = screen.getByLabelText(/first name/i);
    const lastName = screen.getByLabelText(/last name/i);
    const addressCity = screen.getByLabelText(/city/i);
    const addressState = screen.getByLabelText(/state/i);
    const addressZip = screen.getByLabelText(/zip/i);

    expect(firstName).toBeInTheDocument();
    expect(lastName).toBeInTheDocument();
    expect(addressCity).toBeInTheDocument();
    expect(addressState).toBeInTheDocument();
    expect(addressZip).toBeInTheDocument();

});

test("form shows success message on submit with form details", () => {
    render(<CheckoutForm/>);

    const firstName = screen.getByLabelText(/first name/i);
    const lastName = screen.getByLabelText(/last name/i);
    const streetAddress = screen.getByLabelText(/address/i);
    const addressCity = screen.getByLabelText(/city/i);
    const addressState = screen.getByLabelText(/state/i);
    const addressZip = screen.getByLabelText(/zip/i);
    const submitButton = screen.getByRole('button', {name: /checkout/i});

    userEvent.type(firstName, "Ant");
    userEvent.type(lastName, "Rodriguez");
    userEvent.type(streetAddress, "34 Easy St");
    userEvent.type(addressCity, "Edmond");
    userEvent.type(addressState, "Oklahoma");
    userEvent.type(addressZip, "73034");
    userEvent.click(submitButton);

    const success = screen.getByText(/your new green friends will be shipped to:/i);

    expect(success).toBeTruthy();
    

});