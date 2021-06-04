import React from "react";
import { render, screen } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import userEvent from '@testing-library/user-event';
// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    render(<CheckoutForm />);

    const header = document.querySelector('form');

    expect(header).toBeInTheDocument();
    expect(header).toHaveTextContent(/checkout form/i);
});

test("form shows success message on submit with form details", () => {});
