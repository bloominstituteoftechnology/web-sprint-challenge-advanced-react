import React from "react";
import { render, screen } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import userEvent from '@testing-library/user-event';
// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    render(<CheckoutForm/>);
    const header = screen.queryByText("Checkout Form");;
    expect(header).toBeInTheDocument();

});

test("form shows success message on submit with form details", async () => {
    render(<CheckoutForm/>)
    const fnameInput = screen.getByLabelText(/First Name/i);
    const lnameInput = screen.getByLabelText(/Last Name/i);
    const addressInput = screen.getByLabelText(/Address/i);
    const cityInput = screen.getByLabelText(/City/i);
    const stateInput = screen.getByLabelText(/State/i);
    const zipInput = screen.getByLabelText(/Zip/i);
    const button = screen.getByRole("button");

    userEvent.type(fnameInput, "Chase");
    userEvent.type(lnameInput, "Snider");
    userEvent.type(addressInput, "Blah Road");
    userEvent.type(cityInput, "Atlanta");
    userEvent.type(stateInput,"Georgia");
    userEvent.type(zipInput,"00000");
    userEvent.click(button);
    
    const firstInput = await screen.getByText(/Chase/i)
    const secondInput= await screen.getByText(/Snider/i)
    const thirdInput = await screen.getByText(/Blah Road/i)
    const fourthInput = await screen.getByText(/Atlanta/i);    
    const fiveInput = await screen.getByText(/Georgia/i);
    const sixInput = await screen.getByText(/00000/i);

    
    
    expect(firstInput).toBeInTheDocument();
    expect(secondInput).toBeInTheDocument();
    expect(thirdInput).toBeInTheDocument();
    expect(fourthInput).toBeInTheDocument()
    expect(fiveInput).toBeInTheDocument();    
    expect(sixInput).toBeInTheDocument(); 

    const checkout = await screen.getByText(/You have ordered some plants!/i)
    expect(checkout).toBeInTheDocument();
});
