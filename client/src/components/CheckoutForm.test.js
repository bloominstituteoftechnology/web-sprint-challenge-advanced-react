import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    const { getByText } = render(<CheckoutForm />)
    expect(getByText(/Form/i)).toBeVisible()
});

test('Form Inputs are rendered', () => {
    render(<CheckoutForm />)
    expect(screen.getByLabelText(/First Name:/i)).toBeVisible()
    expect(screen.getByLabelText(/Last Name:/i)).toBeVisible()
    expect(screen.getByLabelText(/Address:/i)).toBeVisible()
    expect(screen.getByLabelText(/City:/i)).toBeVisible()
    expect(screen.getByLabelText(/State:/i)).toBeVisible()
    expect(screen.getByLabelText(/Zip:/i)).toBeVisible()
})

test("form shows success message on submit with form details", async() => {
    const { getByText, container } = render(<CheckoutForm />)
    const first = screen.getByLabelText(/First Name:/i)
    const last = screen.getByLabelText(/Last Name:/i)
    const address = screen.getByLabelText(/Address:/i)
    const city = screen.getByLabelText(/City:/i)
    const state = screen.getByLabelText(/State:/i)
    const zip = screen.getByLabelText(/Zip:/i)
    const button = container.querySelector('button')
    fireEvent.change(first, { target: { value: 'Alex' } })
    fireEvent.change(last, { target: { value: 'Jensen' } })
    fireEvent.change(address, { target: { value: '123 Nunya' } })
    fireEvent.change(city, { target: { value: 'Pretty' } })
    fireEvent.change(state, { target: { value: 'EZ' } })  
    fireEvent.change(zip, { target: { value: '54321' } })
    fireEvent.click(button)
    expect(first).toHaveValue('Alex')
    expect(last).toHaveValue('Jensen')
    expect(address).toHaveValue('123 Nunya')
    expect(city).toHaveValue('Pretty')    
    expect(state).toHaveValue('EZ')
    expect(zip).toHaveValue('54321')

    await expect(getByText(/ordered/i)).resolves.toBeVisible
});
