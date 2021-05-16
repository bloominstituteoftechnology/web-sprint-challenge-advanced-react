import React from 'react';
import { render, screen } from '@testing-library/react';
import CheckoutForm from './CheckoutForm';
import userEvent from '@testing-library/user-event';

// Write up the two tests here and make sure they are testing what the title shows

test('form header renders', () => {
  render(<CheckoutForm />);
  const header = screen.getByText(/Checkout Form/i);
  expect(header).toBeInTheDocument();
});

test('form shows success message on submit with form details', () => {
  render(<CheckoutForm />);
  const firstName = screen.getByLabelText('First Name:');
  userEvent.type(firstName, 'Bill');
  const lastName = screen.getByLabelText('Last Name:');
  userEvent.type(lastName, 'Simpson');
  const address = screen.getByLabelText('Address:');
  userEvent.type(address, '1234 1st Street');
  const city = screen.getByLabelText('City:');
  userEvent.type(city, 'Rockville');
  const state = screen.getByLabelText('State:');
  userEvent.type(state, 'Nowhere');
  const zip = screen.getByLabelText('Zip:');
  userEvent.type(zip, '12345');
  const checkout = screen.getByRole('button');
  userEvent.click(checkout);
  const confirmation = screen.getByTestId('successMessage');
  expect(confirmation).toBeInTheDocument();
});
