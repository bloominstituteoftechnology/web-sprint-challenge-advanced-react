import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import CheckoutForm from "./CheckoutForm";
import MutationObserver from 'mutationobserver-shim';

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {});
    render(<CheckoutForm />);
    const header = screen.queryByText(/Checkout Form/i);
    expect(header).toBeInTheDocument();

test("form shows success message on submit with form details", async () => {
    render(<CheckoutForm />);
    const fnInput = screen.getByLabelText("First Name:");
    const lnInput = screen.getByLabelText("Last Name:"); 
    const aInput = screen.getByLabelText("Address:");
    const cInput = screen.getByLabelText("City:");
    const sInput = screen.getByLabelText("State:");
    const zInput = screen.getByLabelText("Zip:");
    const checkoutButton = screen.getByRole("button");

    userEvent.type(fnInput, "Weston");
    userEvent.type(lnInput, "Woodard");
    userEvent.type(aInput, "2200 W San Angelo st");
    userEvent.type(cInput, "Gilbert");
    userEvent.type(sInput, "Arizona");
    userEvent.type(zInput, "85233");
    userEvent.click(checkoutButton);

    await waitFor(() => {
        const successMessage = screen.queryByText(/You have ordered some plants! Woo-hoo!/i);
        expect(successMessage).toBeInTheDocument();
    }) 
});