import React from "react";
import { render } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    const { getByText } = render(<CheckoutForm />);
    const linkElement = getByText(/Checkout Form/i);
    expect(linkElement).toBeInTheDocument();
});

test('form shows success message on submit with form details', () => {
    const firstNameInput = screen.getByPlaceholderText(/first name here/i);
    const lastNameInput = screen.getByPlaceholderText(/last name here/i);
    const addressInput = screen.getByPlaceholderText(/address here/i);
    const cityInput = screen.getByPlaceholderText(/city here/i);
    const stateInput = screen.getByPlaceholderText(/state here/i);
    const zipInput = screen.getByPlaceholderText(/zip here/i);

    fireEvent.change(firstNameInput, {target:
    {name: 'firstName', value:'Theodore'}});
    fireEvent.change(lastNameInput, {target:
    {name: 'lastName', value:'van derHaussen'}});
    fireEvent.change(addressInput, {target:
    {name: 'address', value:'333 port dr'}});
    fireEvent.change(cityInput, {target:
    {name: 'city', value:'Redden'}});
    fireEvent.change(stateInput, {target:
    {name: 'state', value:'Maine'}});
    fireEvent.change(zipInput, {target:
    {name: 'zip', value:'12245'}});

    const submitButton = screen.getByTestId(/button/i);
    fireEvent.click(submitButton);

    const successMessage = screen.getByTestId(/successMessage/i);
    expect(successMessage).toBeInTheDocument();
    expect(firstNameInput).toBeInTheDocument(successMessage);
    expect(lastNameInput).toBeInTheDocument(successMessage);
    expect(addressInput).toBeInTheDocument(successMessage);
    expect(cityInput).toBeInTheDocument(successMessage);
    expect(stateInput).toBeInTheDocument(successMessage);
    expect(zipInput).toBeInTheDocument(successMessage);

});