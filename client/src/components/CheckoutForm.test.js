import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import CheckoutForm from './CheckoutForm';

// Write up the two tests here and make sure they are testing what the title shows

test('form header renders', () => {

  render(<CheckoutForm />);
  const header = screen.getByText(/checkout form/i);

  expect(header).toBeInTheDocument();
});

test('form shows success message on submit with form details', () => {

  render(<CheckoutForm />);


  const firstNameInput = screen.getByLabelText(/first name/i);
  const lastNameInput = screen.getByLabelText(/last name/i);
  const addressInput = screen.getByLabelText(/address/i);
  const cityInput = screen.getByLabelText(/city/i);
  const stateInput = screen.getByLabelText(/state/i);
  const zipInput = screen.getByLabelText(/zip/i);

  fireEvent.change(firstNameInput, { target: { value: 'Mason' } });
  fireEvent.change(lastNameInput, { target: { value: 'Davis' } });
  fireEvent.change(addressInput, { target: { value: '1234 Road Road' } });
  fireEvent.change(cityInput, { target: { value: 'Missouri' } });
  fireEvent.change(stateInput, { target: { value: 'USA' } });
  fireEvent.change(zipInput, { target: { value: '54321' } });


  const checkoutButton = screen.getByRole('button', /checkout/i);

  fireEvent.click(checkoutButton);


  const successMessage = screen.getByTestId('successMessage');

  expect(successMessage).toBeInTheDocument();

  const shippingFirstName = screen.getAllByText(/mason /i);
  const shippingLastName = screen.getAllByText(/davis/i);
  const shippingAddress = screen.getAllByText(/1234 road road/i);
  const shippingCity = screen.getAllByText(/missouri/i);
  const shippingState = screen.getAllByText(/usa/i);
  const shippingZip = screen.getAllByText(/54321/i);
});
