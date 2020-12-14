import React from 'react';
import { render, screen } from '@testing-library/react';
import CheckoutForm from './CheckoutForm';
import userEvent from '@testing-library/user-event';

// Write up the two tests here and make sure they are testing what the title shows

test('form header renders', () => {
	//Arrange
	render(<CheckoutForm />);

	//Act
	const title = screen.getByText(/checkout form/i);

	//Assert
	expect(title).toBeInTheDocument();
});

test('form shows success message on submit with form details', () => {
	//Arrange
	render(<CheckoutForm />);

	//Act
	const successBtn = screen.getByTestId(/successBtn/i);
	userEvent.click(successBtn);
	const successMessage = screen.getByTestId(/successMessage/i);

	//RTL events

	//Assert
	expect(successMessage).toBeInTheDocument();
});
