import React from "react";
import { render, screen } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import userEvent from "@testing-library/user-event";
// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    render(<CheckoutForm/>);
   const header = screen.getByRole('heading');


    expect(header).toHaveTextContent(/Checkout Form/i)
  

});

test("form shows success message on submit with form details", () => {
    render(<CheckoutForm/>);

  // const successMessage = screen.queryByTestId(/successMessage/i);
    const first = screen.getByLabelText(/First Name/i)
    userEvent.type(first, "Vida")

    const last = screen.getByLabelText(/Last Name/i)
    userEvent.type(last, "Causey")

    const address = screen.getByLabelText(/Address/i)
    userEvent.type(address, "123 Causey Lane")

    const city = screen.getByLabelText(/City/i)
    userEvent.type(city, "Accra")

    const state = screen.getByLabelText(/State/i)
    userEvent.type(state, "MD")

    const zip = screen.getByLabelText(/Zip/i)
    userEvent.type(zip, "01610")

    const button = screen.getByRole("button")
   userEvent.click(button)
  
  const successMessage = screen.getByTestId('successMessage')
   expect(successMessage).toBeInTheDocument();
    screen.debug()
});
