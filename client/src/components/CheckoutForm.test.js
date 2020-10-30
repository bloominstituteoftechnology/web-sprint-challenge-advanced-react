import React from "react";
import { fireEvent, render } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    render(<CheckoutForm />);
});

test("form shows success message on submit with form details", async () => {
    
    render(<CheckoutForm />);
    
    const firstNameInput = await screen.getByLabelText(/first name:/i);
    const lastName =  await screen.getByLabelText(/last name:/i);
    const streetAdrs = await screen.getByLabelText(/address:/i);
    const city =  await screen.getByLabelText(/city:/i);
    const state = await screen.getByLabelText(/state:/i);
    const zipCode =await  screen.getByLabelText(/zip:/i);
    const submitBtn = await screen.getByRole('button', {name:/checkout/i})


    fireEvent.change(firstName, { target: { value: 'Ramsha' }});
    fireEvent.change(lastName, { target: { value: 'Nasir' }});
    fireEvent.change(streetAdrs, { target: { value: '1136 Fifth Avenue'}});
    fireEvent.change(city, { target: { value: 'Manhattan' }});
    fireEvent.change(state, { target: { value: 'New York' }});
    fireEvent.change(zipCode, { target: { value: '10026' }});
    fireEvent.click(submitBtn);

    const success = screen.getByTestId(/success message/i);
    expect(success).toBeInTheDocument;
     
    expect( await screen.getByText(/Your new green friends will be shipped to:/i)).toBeInTheDocument();

});
