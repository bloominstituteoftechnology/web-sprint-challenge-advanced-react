import React from "react";
import MutationObserver from 'mutationobserver-shim';
import { render, screen } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import userEvent from "@testing-library/user-event";
import ChekoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("renders without errors", () => {
    render(<ChekoutForm/>);
    
    const first = screen.getByLabelText(/first name/i);
    userEvent.type(first, 'lirong');

    const last = screen.getByLabelText(/last name/i);
    userEvent.type(last, 'cui');

    const address = screen.getByLabelText(/address/i);
    userEvent.type(address, '123 lambda street');

    const city = screen.getByLabelText(/city/i);
    userEvent.type(city, 'seattle');

    const state = screen.getByLabelText(/state/i);
    userEvent.type(state, 'wa');

    const zip = screen.getByLabelText(/zip/i);
    userEvent.type(zip, '12345');
});

test("shows success message on submit with form details", () => {
    render(<CheckoutForm/>);
    // const { getbyLabelText } = screen;

    const first = screen.getByLabelText(/first name/i);
    userEvent.type(first, 'lirong');

    const last = screen.getByLabelText(/last name/i);
    userEvent.type(last, 'cui');

    const address = screen.getByLabelText(/address/i);
    userEvent.type(address, '123 lambda street');

    const city = screen.getByLabelText(/city/i);
    userEvent.type(city, 'seattle');

    const state = screen.getByLabelText(/state/i);
    userEvent.type(state, 'wa');

    const zip = screen.getByLabelText(/zip/i);
    userEvent.type(zip, '12345');

    const button = screen.getByRole("button");
    userEvent.click(button);

    expect(screen.getByTestId("successMessage")).toHaveTextContent("You have ordered some plants! Woo-hoo!")


});
