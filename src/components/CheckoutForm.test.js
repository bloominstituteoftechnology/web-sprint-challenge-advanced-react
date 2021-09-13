import React from "react";
import MutationObserver from 'mutationobserver-shim';
import { render, screen } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import userEvent from '@testing-library/user-event';

// Write up the two tests here and make sure they are testing what the title shows

test("renders without errors", () => {
    render(<CheckoutForm />);
});

test("shows success message on submit with form details", () => {
    const { getByText } = render(<CheckoutForm />);
    const submitButton = getByText("Checkout");
    submitButton.click();
    expect(getByText("You have ordered some plants! Woo-hoo!")).toBeInTheDocument();


});

test('form shows success message on submit with form details', () => {
    render(<CheckoutForm />);
    const firstName = screen.getByLabelText('First Name:');
    userEvent.type(firstName, 'Nicole');
    const lastName = screen.getByLabelText('Last Name:');
    userEvent.type(lastName, 'Pizzano');
    const address = screen.getByLabelText('Address:');
    userEvent.type(address, '320 Laslo Ave');
    const city = screen.getByLabelText('City:');
    userEvent.type(city, 'Dallas');
    const state = screen.getByLabelText('State:');
    userEvent.type(state, 'PA');
    const zip = screen.getByLabelText('Zip:');
    userEvent.type(zip, '11111');
    const checkout = screen.getByRole('button');
    userEvent.click(checkout);
    const confirmation = screen.getByTestId('successMessage');
    expect(confirmation).toBeInTheDocument();
    

  });



