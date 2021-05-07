import React from "react";
import { render,screen,waitFor } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import userEvent from "@testing-library/user-event"

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    render(<CheckoutForm/>)
    const header = screen.queryByText(/checkout form/i);
    expect(header).toBeInTheDocument();

});

test("form shows success message on submit with form details", () => {
    render(<CheckoutForm/>);
    
    const firstName = screen.getByLabelText(/first name:/i);
    const lastName = screen.getByLabelText(/last name:/i);
    const address = screen.getByLabelText(/address:/i);
    const city = screen.getByLabelText(/city:/i);
    const state = screen.getByLabelText(/state:/i);
    const zipcode = screen.getByLabelText(/zip:/i);
    const btn = screen.getByRole("button");

    userEvent.type(firstName, "Ricky");
    userEvent.type(lastName, "Garcia");
    userEvent.type(address, "124 Conch Street");
    userEvent.type(city, "Bikini Bottom");
    userEvent.type(state, "Pacific Ocean");
    userEvent.type(zipcode, "98047");
    userEvent.click(btn);

    const success = screen.getByTestId(/successMessage/i);
    expect(success).toBeInTheDocument();

    



});
