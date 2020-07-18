import React from "react";
import ReactDOM from 'react-dom';
import { render, fireEvent } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    const h2 = document.createElement('h2');
    ReactDOM.render(<CheckoutForm />, h2);
    ReactDOM.unmountComponentAtNode(h2);
});

test("form shows success message on submit with form details", () => {
    const { getByTestId } = render(<CheckoutForm />);

    const firstName = getByTestId(/firstName/);
    fireEvent.change(firstName, { target: { value: 'Jennifer' } });

    const lName = getByTestId(/lastName/);
    fireEvent.change(lName, { target: { value: 'Vest' } });

    const address = getByTestId(/address/);
    fireEvent.change(address, { target: { value: '111 E 2nd St' } });

    const city = getByTestId(/city/);
    fireEvent.change(city, { target: { value: 'De Soto' } });

    const state = getByTestId(/state/);
    fireEvent.change(state, { target: { value: 'MO' } });

    const zip = getByTestId(/zip/);
    fireEvent.change(zip, { target: { value: '63020' } });

    const successMessage = getByTestId(/successMessage/);
    const checkOut = getByTestId(/checkOut/);
    (async () => {
        fireEvent.click(checkOut);
    });
    expect(getByTestId('successMessage')).toBeInTheDocument();
});
