import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    const {getByText} = render(<CheckoutForm />)

    const header = getByText(/Checkout Form/i)
    expect (header).toBeInTheDocument()
});


test("form shows success message on submit with form details", async () => {
    render(<CheckoutForm />)

const firstName = screen.getByLabelText(/first name/i);
const lastName = screen.getByLabelText(/last name/i);
const address = screen.getByLabelText(/address/i);
const city = screen.getByLabelText(/city/i);
const state = screen.getByLabelText(/state/i);
const zipCode = screen.getByLabelText(/zip/i);

fireEvent.change(firstName, {target: { value: "David"}});
fireEvent.change(lastName, {target: { value: "Hall"}});
fireEvent.change(address, {target: { value: "123 Empire Way"}});
fireEvent.change(city, {target: { value: "Waterville"}});
fireEvent.change(state, {target: { value: "Maine"}});
fireEvent.change(zipCode, {target: { value: "04901"}});

expect(firstName).toHaveValue("David"); 

const button = screen.getByRole("button", {name: /checkout/i});
fireEvent.click(button);
//after filling out the fom the state changed to true in my terminal and then when grabbing and checking for the seccess message the test passed

const successMessage = await screen.getByText(/you have ordered/i);
expect(successMessage).toBeInTheDocument();
})




