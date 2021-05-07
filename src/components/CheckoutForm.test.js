import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import userEvent from "@testing-library/user-event";

// Write up the two tests here and make sure they are testing what the title shows
test("renders without errors", () => {
    render(<CheckoutForm/>);
})

test("form header renders", () => {
    render(<CheckoutForm/>);

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
    const zip = screen.getByLabelText(/zip:/i);
    const button = screen.getByRole("button");

    userEvent.type(firstName, "Ryder");
    userEvent.type(lastName, "Kline");
    userEvent.type(address, "111 blahblah lane");
    userEvent.type(city, "yupper");
    userEvent.type(state, "Oregano");
    userEvent.type(zip, "12312");
    userEvent.click(button);

    const success = screen.getByTestId(/successMessage/i);
    expect(success).toBeInTheDocument();

});
