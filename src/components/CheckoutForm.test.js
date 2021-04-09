import React from "react";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import userEvent from "@testing-library/user-event";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
	render(<CheckoutForm />);

	const header = screen.getByText(/checkout form/i);

	expect(header).toBeInTheDocument();
});

test("form shows success message on submit with form details", async () => {
	// Arrange
	render(<CheckoutForm />);
	const firstName = "Tim";
	const lastName = "Jackreece";
	const address = "";
	const city = "naples";
	const state = "florida";
	const zip = "34104";

	// Act
	const firstInput = screen.getByLabelText(/first name/i);
	userEvent.type(firstInput, firstName);
	const lastInput = screen.getByLabelText(/last name/i);
	userEvent.type(lastInput, lastName);
	const addressInput = screen.getByLabelText(/address/i);
	userEvent.type(addressInput, address);
	const cityInput = screen.getByLabelText(/city/i);
	userEvent.type(cityInput, city);
	const stateInput = screen.getByLabelText(/state/i);
	userEvent.type(stateInput, state);
	const zipInput = screen.getByLabelText(/zip/i);
	userEvent.type(zipInput, zip);

	const checkout = screen.getByRole("button");
	userEvent.click(checkout);

	// Assert
	await waitFor(() => {
		const success = screen.getByTestId("successMessage");
		expect(success).toBeInTheDocument();

		const nameText = screen.queryByText(`${firstName} ${lastName}`);
		expect(nameText).toBeInTheDocument();

		const addressText = screen.queryByText(address);
		expect(addressText).toBeInTheDocument();

		const cityStateZipText = screen.queryByText(`${city}, ${state} ${zip}`);
		expect(cityStateZipText).toBeInTheDocument();
	});
});
