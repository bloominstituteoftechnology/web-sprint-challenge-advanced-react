import React from "react";
import MutationObserver from 'mutationobserver-shim';
import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event'
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("renders without errors", () => {
    render(<CheckoutForm/>)
    const header = screen.getByText(/checkout form/i)
    expect(header).toBeInTheDocument()
});

test("shows success message on submit with form details", async () => {
    //Arrange
    render(<CheckoutForm/>)
    //Act
    const firstName = screen.queryByLabelText(/first name:/i)
    userEvent.type(firstName, 'Sherlock')
    const lastName = screen.queryByLabelText(/last name:/i)
    userEvent.type(lastName, 'Holmes')
    const address = screen.queryByLabelText(/address:/i)
    userEvent.type(address, '221B Baker St.')
    const city = screen.queryByLabelText(/city:/i)
    userEvent.type(city, 'Westminster')
    const state = screen.queryByLabelText(/state:/i)
    userEvent.type(state, 'UK')
    const zip = screen.queryByLabelText(/zip:/i)
    userEvent.type(zip, 'SW1A')
    const checkout = screen.getByRole('button')
    userEvent.click(checkout)
    //Assert
    const successMessage = await screen.getByTestId('successMessage')
    expect(successMessage).toBeInTheDocument()
});
