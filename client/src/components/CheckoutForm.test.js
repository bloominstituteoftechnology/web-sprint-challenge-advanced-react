import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event'
import CheckoutForm from "./CheckoutForm";


// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    render(<CheckoutForm/>)
    const header = screen.queryByText(/checkout form/i)
    expect(header).toBeInTheDocument();
});

test("form shows success message on submit with form details", () => {
    render(<CheckoutForm />);
  
    const firstNameInput = screen.getByLabelText(/first name/i);
    const lastNameInput = screen.getByLabelText(/last name/i);
    const addressInput = screen.getByLabelText(/address/i);
    const cityInput = screen.getByLabelText(/city/i);
    const stateInput = screen.getByLabelText(/state/i);
    const zipInput = screen.getByLabelText(/zip/i);
    const button = screen.getByRole("button");
  
    userEvent.type(firstNameInput, "Jacob");
    userEvent.type(lastNameInput, "Stephens");
    userEvent.type(addressInput, "lkajdfl;");
    userEvent.type(cityInput, "Las Vegas");
    userEvent.type(stateInput, "NV");
    userEvent.type(zipInput,"89144");
  
    userEvent.click(button);
  
    const successMessage = screen.getByText(/woo-hoo/i);
    expect(successMessage).toBeVisible();
  });
  