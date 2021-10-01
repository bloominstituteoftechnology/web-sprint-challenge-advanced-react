import React from "react";
import MutationObserver from 'mutationobserver-shim';
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("renders without errors", () => 
{
    render(<CheckoutForm />);
});

test("shows success message on submit with form details", async () =>
{
    // Arrange: render checkout form
    render(<CheckoutForm />);

    // Act: fill out all fields and submit checkout form
    // 1. Give firstName input focus, type first name
    const firstNameInput = screen.getByLabelText(/first name:/i);
    const firstName = "Anastasia";
    userEvent.type(firstNameInput, firstName);

    // 2. Give lastName input focus, type last name
    const lastNameInput = screen.getByLabelText(/last name:/i);
    const lastName = "Lapteva";
    userEvent.type(lastNameInput, lastName);

    // 3. Give address input focus, type street address
    const addressInput = screen.getByLabelText(/address:/i);
    const address = "12345 Fake Ave.";
    userEvent.type(addressInput, address);

    // 4. Give city input focus, type city
    const cityInput = screen.getByLabelText(/city:/i);
    const city = "Tampa";
    userEvent.type(cityInput, city);

    // 5. Give state input focus, type state
    const stateInput = screen.getByLabelText(/state:/i);
    const state = "FL";
    userEvent.type(stateInput, state);

    // 6 Give zip input focus, type zip code
    const zipInput = screen.getByLabelText(/zip:/i);
    const zip = "33601";
    userEvent.type(zipInput, zip);

    // 7. Click the submit button
    const submitButton = screen.getByRole("button");
    userEvent.click(submitButton);

    // Assert: check for success message with form details
    await waitFor(() =>
    {
        const successMessageRender = screen.queryByTestId("successMessage");
        const firstNameRender = screen.queryByTestId("firstName");
        const lastNameRender = screen.queryByTestId("lastName");
        const addressRender = screen.queryByTestId("address");
        const cityRender = screen.queryByTestId("city");
        const zipRender = screen.queryByTestId("zip");

        expect(successMessageRender).toBeVisible();
        expect(firstNameRender).toBeVisible();
        expect(lastNameRender).toBeVisible();
        expect(addressRender).toBeVisible();
        expect(cityRender).toBeVisible();
        expect(zipRender).toBeVisible();
    });
});
