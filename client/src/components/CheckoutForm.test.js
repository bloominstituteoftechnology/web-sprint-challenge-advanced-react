import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event';

import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    render(<CheckoutForm />);
    console.log("CheckoutForm passes!")
});

test("form shows success message on submit with form details", () => {
    render(<CheckoutForm />);

    // Submit the checkout form
    // 1. Query the form elements
    const firstNameInput = screen.getByLabelText(/first name/i);
    const lastNameInput = screen.getByLabelText(/last name/i);
    const addressInput = screen.getByLabelText(/address/i);
    const cityInput = screen.getByLabelText(/city/i);
    const stateInput = screen.getByLabelText(/state/i);
    const zipInput = screen.getByLabelText(/zip/i);

    // 2. Type in form elements
    userEvent.type(firstNameInput, "Jennifer");
    userEvent.type(lastNameInput, "Kramer");
    userEvent.type(addressInput, "123 Made Up Street");
    userEvent.type(cityInput, "Sunshine City");
    userEvent.type(stateInput, "Florida");
    userEvent.type(zipInput, "12345");

    // 3. Query into Checkout button
    const button = screen.getByRole("button")

    // 4. Click Checkout button
    userEvent.click(button);

    // Test if success message worked
    const successMessage = screen.queryByText(/you have ordered some plants! woo-hoo!/i);
    expect(successMessage).toBeInTheDocument();

    // Test if first name worked in success message
    const successFirstName = screen.queryByText(/jennifer/i);
    expect(successFirstName).toBeInTheDocument();

    // Test if last name worked in success message
    const successLastName = screen.queryByText(/kramer/i);
    expect(successLastName).toBeInTheDocument();

    // Test if address worked in success message
    const successAddress = screen.queryByText(/123 made up street/i);
    expect(successAddress).toBeInTheDocument();

    // Test if city worked in success message
    const successCity = screen.queryByText(/sunshine city/i);
    expect(successCity).toBeInTheDocument();

    // Test if state worked in success message
    const successState = screen.queryByText(/florida/i);
    expect(successState).toBeInTheDocument();

    // Test if zip worked in success message
    const successZip = screen.queryByText(/12345/i);
    expect(successZip).toBeInTheDocument();
});
