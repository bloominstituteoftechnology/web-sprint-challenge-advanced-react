import React from "react";
import { render, screen } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import userEvent from '@testing-library/user-event';

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    render(<CheckoutForm />)
    expect(screen.getByText(/Checkout Form/i));
    expect(screen.getByText(/First Name/i));
    expect(screen.getByText(/Last Name/i));
    expect(screen.getByText(/Address/i));    
    expect(screen.getByText(/City/i));
    expect(screen.getByText(/State/i));   
    expect(screen.getByText(/Zip/i));
});

test("form shows success message on submit with form details", async  () => {
    render(<CheckoutForm />)


   


});
