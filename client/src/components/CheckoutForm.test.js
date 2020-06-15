import React from "react";
import { render, fireEvent } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {

    const container = render(<CheckoutForm />);

    const test = container.getByText("Checkout Form");

    expect(test).toBeInTheDocument();

});

test("form shows success message on submit with form details", () => {

    const container = render(<CheckoutForm />);

    const firstName = container.getByLabelText(/first name/i);
    const lastName = container.getByLabelText(/last name/i);
    const address = container.getByLabelText(/address/i);
    const city = container.getByLabelText(/city/i);
    const state = container.getByLabelText(/state/i);
    const zip = container.getByLabelText(/zip/i);

    fireEvent.change(firstName, {target:{value:'Daniel'}});
    fireEvent.change(lastName, {target:{value:'Payne'}});
    fireEvent.change(address, {target:{value:'tester address'}});
    fireEvent.change(city, {target:{value:'Wilmington'}});
    fireEvent.change(state, {target:{value:'NC'}});
    fireEvent.change(zip, {target:{value:'28405'}});

    const submitButton = container.getByText('Checkout');

    fireEvent.click(submitButton);

    const successMessage = container.getByTestId(/successMessage/i);

    expect(successMessage).toBeInTheDocument();


});
