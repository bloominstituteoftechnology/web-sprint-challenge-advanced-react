import React from "react";
import { render, getByPlaceholderText, fireEvent, getByText, screen } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    const { getByText } = render(<CheckoutForm/>);
    

    const title = getByText(/checkout form/i)
    expect(title).toBeTruthy()
    
});

test("form shows success message on submit with form details", async () => {
    const { waitForElement } = render(<CheckoutForm/>)

    const firstName = screen.getByPlaceholderText(/firstName/i)
    fireEvent.change(firstName, {target: {value: 'Noah'}})
    const lastName = screen.getByPlaceholderText(/lastName/i)
    fireEvent.change(lastName, {target: {value: 'Green'}})
    const address = screen.getByPlaceholderText(/address/i)
    fireEvent.change(address, {target: {value: '1680 Parkthorne Drive'}})
    const city = screen.getByPlaceholderText(/city/i)
    fireEvent.change(city, {target: {value: 'Indianapolis'}})
    const state = screen.getByPlaceholderText(/state/i)
    fireEvent.change(state, {target: {value: 'Indiana'}})
    const zip = screen.getByPlaceholderText(/zip/i)
    fireEvent.change(zip, {target: {value: '46229'}})
    const button = screen.getByText('Checkout');
    fireEvent.click(button)
    const success = await screen.getByText(/You have ordered some plants!/i)
    expect(success).toBeInTheDocument()
});
