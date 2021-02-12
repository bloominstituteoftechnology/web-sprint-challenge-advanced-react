import React from "react";
import { render, screen } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import userEvent from '@testing-library/user-event';
import App from "../App"

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    render(<CheckoutForm/>)

    let header = screen.queryByText(/Checkout Form/i);
    expect(header).toBeInTheDocument();

});

test("form shows success message on submit with form details", async () => {
    //Arrange
    render(<CheckoutForm/>)

    //Act
    const nameInput = screen.getByLabelText(/first name:/i);
    const lastNameInput = screen.getByLabelText(/last name:/i);
    const addressInput = screen.getByLabelText(/address:/i);
    const cityInput = screen.getByLabelText(/city:/i);
    const stateInput = screen.getByLabelText(/state:/i);
    const zipInput = screen.getByLabelText(/zip:/i);

    userEvent.type(nameInput, "Declan");
    userEvent.type(lastNameInput, "Casey");
    userEvent.type(addressInput, "1698 Lexington Street");
    userEvent.type(cityInput, "Plymouth");
    userEvent.type(stateInput, "Michigan");
    userEvent.type(zipInput, "48170");

    const submitInput = screen.getByRole('button');
    userEvent.click(submitInput);
    //Assert
    const successful = await screen.findByText(/You have ordered some plants! Woo-hoo!/i);
    expect(successful).toBeInTheDocument();
});