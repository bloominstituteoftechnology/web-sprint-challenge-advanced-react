import React from "react";
import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    render(<CheckoutForm />);
    // Arrange
    // const  checkoutFormHeader = screen.getAllByText(/Checkout Form/gi);
    const  inputFirstName = screen.getByLabelText(/First Name/gi);
    const  inputLastName = screen.getByLabelText(/Last Name/gi);
    const  inputAddress = screen.getByLabelText(/City/gi);
    const  inputState = screen.getByLabelText(/State/gi);
    const  inputZip = screen.getByLabelText(/Zip/gi);

    // Assert 
    expect(inputFirstName).toBeInTheDocument();
    expect(inputLastName).toBeInTheDocument();
    expect(inputAddress).toBeInTheDocument();
    expect(inputState).toBeInTheDocument();
    expect(inputZip).toBeInTheDocument();
    
    expect(inputFirstName).toBeVisible();
    expect(inputLastName).toBeVisible();
    expect(inputAddress).toBeVisible();
    expect(inputState).toBeVisible();
    expect(inputZip).toBeVisible();

});

test("form shows success message on submit with form details", () => {
    render (<CheckoutForm />)

    const inputFirstName = screen.getByLabelText(/First Name/i);
    const inputLastName = screen.getByLabelText(/Last Name/i);
    const inputAddress = screen.getByLabelText(/Address/i);
    const inputCity = screen.getByLabelText(/City/i);
    const inputState = screen.getByLabelText(/State/i);
    const inputZip = screen.getByLabelText(/Zip/i);
    const checkoutButton = screen.getByRole("button", { name: /checkout/i });


    userEvent.type(inputFirstName, 'Testing');
    userEvent.type(inputLastName, 'McTesting' )
    userEvent.type(inputAddress, '123 Testing Dr STE 1234')
    userEvent.type(inputCity, 'Broomfield')
    userEvent.type(inputState, 'Colorado')
    userEvent.type(inputZip, '80020')
    userEvent.click(checkoutButton);

    const confirmation = screen.getByText(/Your new green friends will be shipped to:/i)

    expect(confirmation).toBeTruthy();
});
