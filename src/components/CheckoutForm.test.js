import React from "react";
import { render,screen } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import userEvent from '@testing-library/user-event'



// Write up the two tests here and make sure they are testing what the title shows



test("form header renders", () => {
    render(<CheckoutForm />)
    const header = screen.getByText('Checkout Form')
    expect(header).toBeInTheDocument()
    expect(header).toBeTruthy()
    expect(header).toHaveTextContent('Checkout Form')
  });
  
  test("form shows success message on submit with form details", async () => {
    render(<CheckoutForm />)
    const firstName = screen.getByLabelText('First Name:')
    const lastName = screen.getByLabelText('Last Name:')
    const address = screen.getByLabelText('Address:')
    const city = screen.getByLabelText('City:')
    const state = screen.getByLabelText('State:')
    const zip = screen.getByLabelText('Zip:')
    const button = screen.getByRole('button')
  
    userEvent.type(firstName, 'Abraham')
    userEvent.type(lastName, 'Mirambeaux')
    userEvent.type(address, 'New York Ave')
    userEvent.type(city, 'Jersey City')
    userEvent.type(state, 'Jersey')
    userEvent.type(zip, '07011')
    userEvent.click(button)
  
    const successBox = await screen.findByTestId('successMessage')
    const successFullName = await screen.findByTestId('fullName')
    const successStreet = await screen.findByTestId('street')
    const successCSZ = await screen.findByTestId('CSZ')
  
  test("form shows success message on submit with form details", () => {});
    expect(successBox).toBeInTheDocument()
    expect(successBox).toBeTruthy()
  
    expect(successFullName).toBeInTheDocument()
    expect(successFullName).toBeTruthy()
    expect(successFullName).toHaveTextContent('Abraham')
    expect(successStreet).toBeInTheDocument()
    expect(successStreet).toBeTruthy()
    expect(successStreet).toHaveTextContent('New York Ave')
    expect(successCSZ).toBeInTheDocument()
    expect(successCSZ).toBeTruthy()
    expect(successCSZ).toHaveTextContent('Jersey City')
  });