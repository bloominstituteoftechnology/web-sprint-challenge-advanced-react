import React from 'react';
import MutationObserver from 'mutationobserver-shim';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import CheckoutForm from './CheckoutForm';

// Write up the two tests here and make sure they are testing what the title shows

test('renders without errors', () => {
	render(<CheckoutForm />);
	expect(screen.getByText('Checkout Form')).toBeInTheDocument();
});

test('shows success message on submit with form details', () => {
	render(<CheckoutForm />);

	// Mock form data
	fireEvent.change(screen.getByLabelText(/first name:/i), {
		target: { name: 'firstName', value: 'Joe' },
	});
	fireEvent.change(screen.getByLabelText(/last name:/i), {
		target: { name: 'lastName', value: 'Coder' },
	});
	fireEvent.change(screen.getByLabelText(/address:/i), {
		target: { name: 'address', value: '1 Apple Park Way' },
	});
	fireEvent.change(screen.getByLabelText(/city:/i), {
		target: { name: 'city', value: 'Cupertino' },
	});
	fireEvent.change(screen.getByLabelText(/state:/i), {
		target: { name: 'state', value: 'CA' },
	});
	fireEvent.change(screen.getByLabelText(/zip:/i), {
		target: { name: 'zip', value: '95014' },
	});

	// Submit form
	fireEvent.click(screen.getByRole('button', { name: /checkout/i }));

	// Check for success message
	expect(screen.getByTestId('successMessage')).toBeInTheDocument();

	//  Success message content
	expect(
		screen.getByText('You have ordered some plants! Woo-hoo!')
	).toBeInTheDocument();
});
