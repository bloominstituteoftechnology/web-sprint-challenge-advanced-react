import React from "react";
import { render, screen } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import userEvent from '@testing-library/user-event';

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    render(<CheckoutForm />);
});

    const header = screen.getByText(/Checkout Form/i);

    expect(header).toBeInTheDocument();
    expect(header).not.toBeNull();

test("form shows success message on submit with form details", () => {

    render(<CheckoutForm />);

    const firstName = screen.getByLabelText(/First Name/i);
    const lastName = screen.getByLabelText(/Last Name/i);
    const address = screen.getByLabelText(/Address/i);
    const city =screen.getByLabelText(/City/i);
    const state = screen.getByLabelText(/State/i);
    const zipcode = screen.getByLabelText(/Zipcode/i);
    const button = screen.getByRole('button');

    userEvent.type(firstName, "Quinn");
    userEvent.type(lastName, "Molina");
    userEvent.type(address, "1234 Spring Street");
    userEvent.type(city, "Los Angeles");
    userEvent.type(state, "California");
    userEvent.type(zipcode, "90210");
    userEvent.click(button);

    const missionAccomplished = document.querySelector("[data-testid='greatSuccess']");

    expect(missionAccomplished).toHaveTextContent("Quinn Molina");
    expect(missionAccomplished).toHaveTextContent("1234 Spring Street")
    expect(missionAccomplished).toHaveTextContent("Los Angeles");
    expect(missionAccomplished).toHaveTextContent("California");
    expect(missionAccomplished).toHaveTextContent("90210");

});
