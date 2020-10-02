import React from "react";
import { render } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    render(<CheckoutForm />)

    expect(screen.getByText(/checkout form/i))
});

test("form shows success message on submit with form details", () => {
    render(<CheckoutForm />)  

    const name = screen.getByLabelText(/First Name:/i);
    const lastname = screen.getByLabelText(/Last Name:/i);
    const address = screen.getByLabelText(/Address:/i);
    const city = screen.getByLabelText(/City:/i);
    const state = screen.getByLabelText(/State:/i);
    const zip = screen.getByLabelText(/Zip:/i);
    const submitBtn = screen.getByRole('button', { name: /Checkout/i });
    
    fireEvent.change(name, { target: { value: 'Bryan' } })
    fireEvent.change(lastname, { target: { value: 'Adams'} })
    fireEvent.change(address, { target: { value: '111 Las Vegas Blvd' } })
    fireEvent.change(city, { target: { value: 'Las Vegas' } })
    fireEvent.change(state, { target: { value: 'Nevada' } })
    fireEvent.change(zip, { target: { value: '89012' } })
    fireEvent.click(submitBtn);
    expect(screen.getByText(/You have ordered some plants!/i)).toBeInTheDocument();
});