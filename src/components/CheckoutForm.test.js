import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CheckoutForm from "./CheckoutForm";

const firstName = "Tawnya";
const lastName = "Wessar";
const address = "5665 West Ave";
const city = "Marysville";
const state = "California";
const zipCode = "00420";

test( "form header renders", () => {
	render( <CheckoutForm/> );

	expect( screen.getByText( /Checkout Form/i ) );
} );

test( "form shows success message on submit with form details", async () => {
	render( <CheckoutForm/> );

	const firstInput = screen.getByLabelText( /first/i );
	const lastInput = screen.getByLabelText( /last/i );
	const addressInput = screen.getByLabelText( /address/i );
	const cityInput = screen.getByLabelText( /city/i );
	const stateInput = screen.getByLabelText( /state/i );
	const zipInput = screen.getByLabelText( /zip/i );

	await userEvent.type( firstInput, firstName );
	await userEvent.type( lastInput, lastName );
	await userEvent.type( addressInput, address );
	await userEvent.type( cityInput, city );
	await userEvent.type( stateInput, state );
	await userEvent.type( zipInput, zipCode );

	userEvent.click( screen.getByRole( "button" ) );

	await expect( screen.getByTestId( "successMessage" ) );

	await expect( screen.getByTitle( "success-name" ) );
	await expect( screen.getByTitle( "success-street-address" ) );
	await expect( screen.getByTitle( "success-city-state-zip" ) );
} );
