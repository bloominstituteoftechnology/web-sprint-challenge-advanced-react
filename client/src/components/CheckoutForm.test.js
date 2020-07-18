import React from "react";
import { render, fireEvent, getByText, getByTestId } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing 
// what the title shows

test("form header renders", () => {
    render(<CheckoutForm />);
});

test("form shows success message on submit with form details", () => {
    const { getByRole, getByTestId } = render(<CheckoutForm />);
    const button = getByRole('button');
    fireEvent.click(button);
    expect(getByTestId("successMessage")).toHaveTextContent("You have ordered some plants");
});