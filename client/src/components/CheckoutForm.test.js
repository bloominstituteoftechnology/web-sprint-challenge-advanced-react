import React from "react";
import { render, fireEvent, getAllByText, getByText, screen } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    render(<CheckoutForm/>)
    const header = screen.getByText(/Checkout Form/)
    expect(header).toBeInTheDocument();
});

test("form shows success message on submit with form details", () => {
    render(<CheckoutForm/>)
    const firstName=screen.getByLabelText(/first name/i);
    const lastName=screen.getByLabelText(/last name/i);
    const address=screen.getByLabelText(/address/i);
    const city=screen.getByLabelText(/city/i);
    const state=screen.getByLabelText(/state/i);
    const zip=screen.getByLabelText(/zip/i);
    const button=screen.getByRole('button',{name:/checkout/i});

    fireEvent.change(firstName,{target:{value:'Ant'}});
    fireEvent.change(lastName,{target:{value:'Rodriguez'}});
    fireEvent.change(address,{target:{value:'123 Easy St'}});
    fireEvent.change(city,{target:{value:'Moontown'}});
    fireEvent.change(state,{target:{value:'Moonstate'}});
    fireEvent.change(zip,{target:{value:'444444'}});
    fireEvent.click(button);

    const newName = screen.getAllByText(/Ant/i);
    expect(newName).toBeTruthy();


});
