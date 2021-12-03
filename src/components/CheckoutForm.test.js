import React from "react";
import MutationObserver from 'mutationobserver-shim';
import { render } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";


// Write up the two tests here and make sure they are testing what the title shows

test("renders without errors", () => {
    render(<CheckoutForm />);

});

test("shows success message on submit with form details", async () => {
    render(<CheckoutForm />);
  
    const firstNameInput = screen.getByLabelText(/First Name:/i);
    userEvent.type(firstNameInput, "first");
    const lastNameInput = screen.getByLabelText(/Last Name:/i);
    userEvent.type(lastNameInput, "last");
    const addressInput = screen.getByLabelText(/Address:/i);
    userEvent.type(addressInput, "address");
    const cityInput = screen.getByLabelText(/City:/i);
    userEvent.type(cityInput, "city");
    const stateInput = screen.getByLabelText(/State:/i);
    userEvent.type(stateInput, "state");
    const zipInput = screen.getByLabelText(/Zip:/i);
    userEvent.type(zipInput, "12345");
    
    const submitButton = screen.getByRole("button");
    userEvent.click(submitButton);
  
    await waitFor(() => {
      const successMessage = screen.getByTestId(/successMessage/i);
      expect(successMessage).toBeInTheDocument();
    });
  });
