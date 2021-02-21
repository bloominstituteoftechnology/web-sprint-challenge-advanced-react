import React from "react";
import { render, screen } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    render(<App />);

    const header = screen.getByText(/react plants/i);

    expect(header).toBeInTheDocument();
});

test("form shows success message on submit with form details", () => {
    render(<CheckoutForm />);

    const successMessage = screen.findByText(/you have ordered some plants/i);
    const firstName = screen.findByLabelText(/First Name:/i);
    const lastName = screen.findByLabelText(/Last Name:/i);
    const address = screen.findByLabelText(/Address:/i);
    const city = screen.findByLabelText(/City:/i);
    const state = screen.findByLabelText(/State:/i);
    const zip = screen.findByLabelText(/Zip:/i);

    expect(successMessage).toBeInTheDocument();
    expect(firstName).toBeInTheDocument();
    expect(lastName).toBeInTheDocument();
    expect(address).toBeInTheDocument();
    expect(city).toBeInTheDocument();
    expect(state).toBeInTheDocument();
    expect(zip).toBeInTheDocument();
});
