import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import CheckoutForm from './CheckoutForm';

// Write up the two tests here and make sure they are testing what the title shows

test('form header renders', () => {
  render(<CheckoutForm />);
  screen.getByText('Checkout Form');
});

test('form shows success message on submit with form details', () => {
  render(<CheckoutForm />);

  const firstNameInput = screen.getByLabelText(/First Name/i);
  const lastNameInput = screen.getByLabelText(/Last Name/i);
  const addressInput = screen.getByLabelText(/Address/i);
  const cityInput = screen.getByLabelText(/City/i);
  const stateInput = screen.getByLabelText(/State/i);
  const zipInput = screen.getByLabelText(/Zip/i);
  const submitButton = document.querySelector('button');

  userEvent.type(firstNameInput, 'Kristin');
  userEvent.type(lastNameInput, 'Vaughn');
  userEvent.type(addressInput, '555 Some Road');
  userEvent.type(cityInput, 'Inkster');
  userEvent.type(stateInput, 'MI');
  userEvent.type(zipInput, '48141');
  userEvent.click(submitButton);

  const successMessage = document.querySelector(
    "[data-testid='successMessage']"
  );
  expect(successMessage).toHaveTextContent(/Kristin Vaughn/);
  expect(successMessage).toHaveTextContent(/555 Some Road/);
  expect(successMessage).toHaveTextContent(/Inkster/);
  expect(successMessage).toHaveTextContent(/MI/);
  expect(successMessage).toHaveTextContent(/48141/);
});
