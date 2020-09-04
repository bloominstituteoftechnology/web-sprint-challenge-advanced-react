import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {

    render(<CheckoutForm />)
    const formHead = screen.getByText(/checkout form/i)
    expect(formHead).toBeInTheDocument()

});

test("form shows success message on submit with form details", async () => {

    render(<CheckoutForm />);
    const firstName = screen.getByLabelText(/first name:/i)
    const lastName = screen.getByLabelText(/last name:/i)
    const address = screen.getByLabelText(/address:/i)
    const city = screen.getByLabelText(/city:/i)
    const state = screen.getByLabelText(/state:/i)
    const zip = screen.getByLabelText(/zip:/i)

    fireEvent.change(firstName, { target: { value: 'first' } } )
    fireEvent.change(lastName, { target: { value: 'last' } } )
    fireEvent.change(address, { target: { value: '123 address' } } )
    fireEvent.change(city, { target: { value: 'city' } } )
    fireEvent.change(state, { target: { value: 'state' } } )
    fireEvent.change(zip, { target: { value: 'zip' } } )
    
    const checkoutBtn = screen.getByRole('button', { name: /checkout/i })
    fireEvent.click(checkoutBtn)

    expect(await screen.getByText(/123 address/)).toBeInTheDocument()

});
