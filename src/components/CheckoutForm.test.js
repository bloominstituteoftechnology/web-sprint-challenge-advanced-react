import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event'
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("renders without errors", () => {
	render(<CheckoutForm />);

	const checkoutForm = screen.getById(/checkout form/i)

	expect(checkoutForm).toBeInTheDocument()
	expect(checkoutForm).toHaveTextContent()
	expect(checkoutForm).toBeTruthy()


});

test("shows success message on submit with form details", () => {

	render(<CheckoutForm />)

	const checkoutForm = screen.getById(/checkout form/i)

	const firstname = screen.getByLabelText(/First Name:/i)
	const lastname = screen.getByLabelText(/Last Name:/i)
	const address = screen.getByLabelText(/Address:/i)
	const city = screen.getByLabelText(/City:/i)
	const state = screen.getByLabelText(/State/i)
	const zip = screen.getByLabelText(/Zip:/i)
	const checkout = screen.queryByRole('button')

	
});
