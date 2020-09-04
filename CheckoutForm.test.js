import React from "react";
import { render, screen, fireEvent, act } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
//import { act } from "react-dom/test-utils"

// Write up the two tests here and make sure they are testing what the title shows

test("Renders form without errors", () => {
    render(<CheckoutForm />);
    
  });

test("form header renders", async() => {
    render(<CheckoutForm />);
    const h2 = await screen.findByText(/Checkout Form/i)
    expect(h2).toBeInTheDocument()

    //await act(async() => fireEvent.click(submitBtn))
});

test("form shows success message on submit with form details", async() => {
    render(<CheckoutForm />);

    const firstNameInput = await screen.findByLabelText(/First Name:/i);
    const lastNameInput = await screen.findByLabelText(/Last Name:/i);
    const addressInput = await screen.findByLabelText(/Address:/i);
    const cityInput = await screen.findByLabelText(/City:/i);
    const stateInput = await screen.findByLabelText(/State:/i);
    const zipInput = await screen.findByLabelText(/Zip:/i);

    
    fireEvent.change(firstNameInput, { target: { value: "Oleg" } });
    fireEvent.change(lastNameInput, { target: { value: "M" } });
    fireEvent.change(addressInput, { target: { value: "123 Street" } });
    fireEvent.change(cityInput, { target: { value: "City" } });
    fireEvent.change(stateInput, { target: { value: "AA" } });
    fireEvent.change(zipInput, { target: { value: "12345" } });

    
    const submitBtn = screen.getByRole("button", { name: /CHECKOUT/i });
   
    await act(async() => fireEvent.click(submitBtn))
});
