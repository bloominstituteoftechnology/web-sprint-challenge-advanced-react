import React from "react";
import { render, fireEvent, getByTestId, waitFor, getByText, screen } from "@testing-library/react";
import App from '../App'
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows
//running tests....

test("form header renders", () => {
  render(<App />);
});

test("form shows success message on submit with form details", async () => {
    const { getByLabelText, getByRole } = render(<CheckoutForm />);
  
    const firstName = getByLabelText(/first name/i);
    fireEvent.change(firstName, { target: { value: 'Esteban'} });
  
    const lastName = getByLabelText(/last Name/i);
    fireEvent.change(lastName, { target: { value: 'Licea'} });

    const address = getByLabelText(/address/i);
    fireEvent.change(address, { target: { value: '123 Hodge St'} });

    const city = getByLabelText(/city/i);
    fireEvent.change(city, { target: { value: 'Chicago'} });

    const state = getByLabelText(/state/i);
    fireEvent.change(state, { target: { value: 'IL'} });

    const zip = getByLabelText(/zip/i);
    fireEvent.change(zip, { target: { value: '60612'} });

    const button = getByRole('button', /submit/i);
    fireEvent.click(button); 


    const successArea = await waitFor(() => getByTestId(/sucess-area/i))
    expect(successArea.textContent).toBe(`${city}, ${state}`)

   
});