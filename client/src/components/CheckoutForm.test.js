import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import CheckoutForm from './CheckoutForm';

// Write up the two tests here and make sure they are testing what the title shows

test('form header renders', () => {
	const { getByText } = render(<CheckoutForm />);
	getByText(/checkout form/i);
});

test('form shows success message on submit with form details', () => {
	const { getByLabelText, findAllByText, getByTestId } = render(<CheckoutForm />);

	fireEvent.change(getByLabelText(/first name/i), {target: { value: 'ryan' }});
	fireEvent.change(getByLabelText(/last name/i), {target: { value: 'erickson' }});
	fireEvent.change(getByLabelText(/address/i), {target: { value: '832 sw munjack cir' }});
	fireEvent.change(getByLabelText(/city/i), {target: { value: 'port saint lucie' }});
	fireEvent.change(getByLabelText(/state/i), {target: { value: 'florida' }});
	fireEvent.change(getByLabelText(/zip/i), { target: { value: '34986' } });

	const checkoutButton = getByTestId('checkoutButton');
	fireEvent.click(checkoutButton);

	findAllByText(/ryan/i);

	expect(getByTestId('successMessage')).toBeInTheDocument();
});