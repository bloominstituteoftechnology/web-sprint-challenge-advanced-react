import React from "react";
import { render, screen, fireEvent} from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
render(<CheckoutForm />) // Render the form
expect(screen.getByText(/checkout form/i)); // Find the header by the regEx text

});

test("form shows success message on submit with form details", () => {
    render(<CheckoutForm />)
    // query all inputs
    const firstNameInput = screen.getByLabelText(/first name/i);
    const lastNameInput = screen.getByLabelText(/last name/i);
    const addressInput = screen.getByLabelText(/address/i);
    const cityInput = screen.getByLabelText(/city/i);
    const stateInput = screen.getByLabelText(/state/i);
    const zipInput = screen.getByLabelText(/zip/i);
    const submitBtn = screen.getByRole('button', {name: /checkout/i});

// Fire events
    fireEvent.change(firstNameInput, {target: { value: 'Jen' }});
    fireEvent.change(lastNameInput, {target: { value: 'Stewart' }});
    fireEvent.change(addressInput, {target: { value: '5555 Road rd.' }});
    fireEvent.change(cityInput, {target: { value: 'Kansas City' }});
    fireEvent.change(stateInput, {target: { value: 'KS' }});
    fireEvent.change(zipInput, {target: { value: '66219' }});
// Fire Submit Button
    fireEvent.click(submitBtn);
    expect(screen.getByText(/jen/i))
    expect(screen.getByText(/stewart/i))
    expect(screen.getByText(/555 Road rd./i))
    expect(screen.getByText(/Kansas City/i))
    expect(screen.getByText(/66219/i))
    expect(screen.queryByText('successMessage'))

});
