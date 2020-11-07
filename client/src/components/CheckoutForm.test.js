import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    const { getByText } = render(<CheckoutForm />);
    const heading = getByText(/Checkout Form/i);
    expect(heading).toBeInTheDocument();
});

test("form shows success message on submit with form details", async () => {
    const utils = render(<CheckoutForm />)
    const firstName = utils.getByLabelText('First Name:')
    const lastName = utils.getByLabelText('Last Name:')
    const address = utils.getByLabelText('Address:')
    const city = utils.getByLabelText('City:')
    const state = utils.getByLabelText('State:')
    const zip = utils.getByLabelText('Zip:')
    const sub = utils.getByRole('button', {name: /sub/i})


    fireEvent.change(firstName, { target: { value: 'Jacob' } })
    expect(firstName.value).toBe('Jacob')
    fireEvent.change(lastName, { target: { value: 'Morris' } })
    expect(lastName.value).toBe('Morris')
    fireEvent.change(address, { target: { value: '123 Main' } })
    expect(address.value).toBe('123 Main')
    fireEvent.change(city, { target: { value: 'Taylorsville' } })
    expect(city.value).toBe('Taylorsville')
    fireEvent.change(state, { target: { value: 'Utah' } })
    expect(state.value).toBe('Utah')
    fireEvent.change(zip, { target: { value: '84123' } })
    expect(zip.value).toBe('84123')
    fireEvent.click(sub)
    const success = utils.getByTestId('successMessage')
    expect(success).toBeInTheDocument();
    expect(screen.getByTestId('successMessage')).toHaveTextContent('Jacob Morris');
});
