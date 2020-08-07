import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    render(<CheckoutForm />);
    const formHeader = screen.getByText(/checkout form/i);
    expect(formHeader).toBeInTheDocument();
});

test("form shows success message on submit with form details", async () => {
    render(<CheckoutForm />)
    const fNameInput = screen.getByLabelText(/first name:/i)
    const lNameInput = screen.getByLabelText(/last name:/i)
    const addressInput = screen.getByLabelText(/address:/i)
    const cityInput = screen.getByLabelText(/city:/i)
    const stateInput = screen.getByLabelText(/state:/i)
    const zipInput = screen.getByLabelText(/zip:/i)

    fireEvent.change(fNameInput, { target: { value: 'Jon'} } )
    fireEvent.change(lNameInput, { target: { value: 'last'} } )
    fireEvent.change(addressInput, { target: { value: '123 address'} } )
    fireEvent.change(cityInput, { target: { value: 'city'} } )
    fireEvent.change(stateInput, { target: { value: 'state'} } )
    fireEvent.change(zipInput, { target: { value: '12345'} } )

    const checkoutBtn = screen.getByRole('button', { name: /checkout/i })
    fireEvent.click(checkoutBtn)

    expect(await screen.getByText(/jon/i)).toBeInTheDocument();
});
