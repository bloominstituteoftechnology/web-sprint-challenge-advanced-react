import React from "react";
import { render,screen } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import userEvent from '@testing-library/user-event';

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    render(<CheckoutForm/>);
    const header = screen.getByText(/checkout form/i);
    expect(header).toBeInTheDocument();

});

test("form shows success message on submit with form details", async () => {
    render(<CheckoutForm/>);

    const firstName = screen.getByLabelText(/first name/i);
    const lastName = screen.getByLabelText(/last name/i);
    const address = screen.getByLabelText(/address/i);
    const city = screen.getByLabelText(/city/i);
    const state = screen.getByLabelText(/state/i);
    const zipcode = screen.getByLabelText(/zip/i);

    userEvent.type(firstName, "Andrew");
    userEvent.type(lastName, "Sohrabi");
    userEvent.type(address, "123 Main Street");
    userEvent.type(city, "San Francisco");
    userEvent.type(state, "CA");
    userEvent.type(zipcode, "12345");

    const button = screen.getByRole('button');
    userEvent.click(button);

    const newOrderDetailsName = await screen.findByText("Andrew Sohrabi");
    expect(newOrderDetailsName).toBeInTheDocument();

    // additional checks
    // const newOrder = await screen.findByText("You have ordered some plants! Woo-hoo! 🎉");
    // expect(newOrder).toBeInTheDocument();
    // const newOrder2 = await screen.findByText("Your new green friends will be shipped to:");
    // expect(newOrder2).toBeInTheDocument();

    // const newOrderDetailsAddress = await screen.findByText("123 Main Street");
    // expect(newOrderDetailsAddress).toBeInTheDocument();
    // const newOrderDetailsGeo = await screen.findByText("San Francisco, CA 12345");
    // expect(newOrderDetailsGeo).toBeInTheDocument();
});
