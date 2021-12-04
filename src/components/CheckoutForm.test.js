import React from "react";
import MutationObserver from 'mutationobserver-shim';
import { render, screen, waitFor } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import userEvent from "@testing-library/user-event";

// Write up the two tests here and make sure they are testing what the title shows

test("renders without errors", () => {
    render(<CheckoutForm />)
});

test("shows success message on submit with form details", async () => {
    render(<CheckoutForm />)
    const firstName = screen.getByLabelText(/first name:/i)
      userEvent.type(firstName, 'Shivneel')
    const lastName = screen.getByLabelText(/last name:/i)
      userEvent.type(lastName, 'Prasad')
    const address = screen.getByLabelText(/address:/i)
      userEvent.type(address, '1234 Storm Ave')
    const city = screen.getByLabelText(/city:/i)
      userEvent.type(city, 'Modesto')
    const state = screen.getByLabelText(/state:/i)
      userEvent.type(state, 'CA')
    const zipCode = screen.getByLabelText(/zip:/i)
      userEvent.type(zipCode, '95356')
    const submit = screen.getByRole('button')
      userEvent.click(submit)

    const successMessage = screen.getAllByTestId('successMessage')
      expect(successMessage)
    
    waitFor(() => {
      const first = screen.queryByTestId('Shivneel')
        expect(first).toBeVisible()
      const last = screen.queryByTestId('Prasad')
        expect(last).toBeVisible()
      const address = screen.queryByTestId('1234 Storm Ave')
        expect(address).toBeVisible()
      const city = screen.queryByTestId('Modesto')
        expect(city).toBeVisible()
      const state = screen.queryByTestId('CA')
        expect(state).toBeVisible()
      const zip = screen.queryByTestId('95356')
        expect(zip).toBeVisible()
      const successMessage = screen.queryByTestId('successMessage')
        expect(successMessage).toBeVisible()
    })
})
