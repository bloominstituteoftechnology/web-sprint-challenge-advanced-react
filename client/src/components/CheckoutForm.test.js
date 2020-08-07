import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    render(<CheckoutForm />);
    const header = screen.getByText(/Checkout Form/i)
    expect(header).toBeInTheDocument();
});

test("form shows success message on submit with form details", () => {
    const {getByLabelText, getByText, queryByTestId } = render(<CheckoutForm />)

    const fnInput = getByLabelText(/first name/i);
    const lnInput = getByLabelText(/last name/i);
    const addressInput = getByLabelText(/address/i);

    fireEvent.change(fnInput, {target: {value: "first name"} });
    fireEvent.change(lnInput, {target: {value: "Krynick"} });
    fireEvent.change(addressInput, {target: {value: "address"} });

    const submit = getByText(/checkout$/i)

    fireEvent.click(submit)

    expect(queryByTestId(/success-message/i)).toBeTruthy()
});
