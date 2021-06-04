import React from "react";
import { render } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import { screen } from '@testing-library/react';



// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    render(<CheckoutForm />)
});

test("form shows success message on submit with form details", () => {
    render(<CheckoutForm />)

    const inputFirstName =  screen.getByLabelText(/first name:/i)
    const inputLastName =  screen.getByLabelText(/last name:/i)
    const inputAddress =  screen.getByLabelText(/address:/i)
    const inputCity =  screen.getByLabelText(/city:/i)
    const inputState =  screen.getByLabelText(/state:/i)
    const inputZip =  screen.getByLabelText(/zip:/i)

    userEvent.type(inputFirstName, 'Jonny');
    userEvent.type(inputLastName, 'Test');
    userEvent.type(inputAddress, '5123 West st');
    userEvent.type(inputCity, 'Miami');
    userEvent.type(inputState, 'FL');
    userEvent.type(inputZip, '48141');

    expect(inputFirstName).toHaveValue('Jonny')
    expect(inputLastName).toHaveValue('Test')
    expect(inputAddress).toHaveValue('5123 West st')
    expect(inputCity).toHaveValue('Miami')
    expect(inputState).toHaveValue('FL')
    expect(inputZip).toHaveValue('48141')

});
