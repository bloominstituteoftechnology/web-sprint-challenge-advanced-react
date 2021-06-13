import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import CheckoutForm from './CheckoutForm';

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    // Arrange
    render(<CheckoutForm />);

    // Act
    const header = screen.getByText(/checkout form/i);

    // Assert
    expect(header).toBeInTheDocument();
    expect(header).toBeTruthy();
    expect(header).toHaveTextContent(/checkout form/i);
});

test("form shows success message on submit with form details", () => {
    // Arrange 
    render(<CheckoutForm />);
    const firstName = screen.getByLabelText(/First Name/i);
    const lastName = screen.getByLabelText(/Last Name/i);
    const address = screen.getByLabelText(/Address/i);
    const city = screen.getByLabelText(/City/i);
    const state = screen.getByLabelText(/State/i);
    const zip = screen.getByLabelText(/Zip/i);
    const submitButton = document.querySelector('button');

     // Act 
     userEvent.type(firstName, 'Tamara');
     userEvent.type(lastName, 'Leonard');
     userEvent.type(address, '123 Adams Road');
     userEvent.type(city, 'Tucson');
     userEvent.type(state, 'AZ');
     userEvent.type(zip, '85641');
     userEvent.click(submitButton);

     // Assert 
     const successMessage = document.querySelector(
        "[data-testid='successMessage']"
      );

      expect(successMessage).toHaveTextContent(/Tamara Leonard/);
      expect(successMessage).toHaveTextContent(/123 Adams Road/);
      expect(successMessage).toHaveTextContent(/Tucson/);
      expect(successMessage).toHaveTextContent(/AZ/);
      expect(successMessage).toHaveTextContent(/85641/);
});