import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    //Arrange
    render(<CheckoutForm />);

    //Act
    const header = screen.getByText(/checkout form/i);

    //Assert
    expect(header).toHaveTextContent(/checkout form/i);
});

test("form shows success message on submit with form details", () => {
    //Arrange
    render(<CheckoutForm />);

    //Act
    const firstName= screen.getByLabelText(/first name/i);
    const lastName= screen.getByLabelText(/last name/i);
    const address= screen.getByLabelText(/address/i);
    const city= screen.getByLabelText(/city/i);
    const state= screen.getByLabelText(/state/i);
    const zip= screen.getByLabelText(/zip/i);
    const button = screen.getByRole('button')

    userEvent.type(firstName, 'P');
    userEvent.type(lastName, 'Sherman');
    userEvent.type(address, '42 Wallaby Way');
    userEvent.type(city,'Sydney');
    userEvent.type(state, 'Australia');
    userEvent.type(zip, '101010');
    userEvent.click(button);

    const successMessage = screen.getByTestId('successMessage')

    //Assert
    expect(firstName).toBeInTheDocument(/p/i);
    expect(lastName).toBeInTheDocument(/Sherman/i);
    expect(address).toBeInTheDocument(/42 Wallaby Way/i);
    expect(city).toBeInTheDocument(/Sydney/i);
    expect(state).toBeInTheDocument(/Australia/i);
    expect(zip).toBeInTheDocument(/101010/i);
    expect(successMessage).toBeInTheDocument();
    
});
