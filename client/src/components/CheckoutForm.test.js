import React from "react";
import { render,screen,fireEvent } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    render(<CheckoutForm/>)


    const fnameInput = screen.getByLabelText(/first name/i)
    const lnameInput = screen.getByLabelText(/last name/i)
    const addressInput = screen.getByLabelText(/address/i)
    const cityInput = screen.getByLabelText(/city/i)
    const stateInput = screen.getByLabelText(/state/i)
    const zipInput = screen.getByLabelText(/zip/i)

    fireEvent.change(fnameInput,{target:{value:'ahmad'}})
    fireEvent.change(lnameInput,{target:{value:'sayadi'}})
    fireEvent.change(addressInput,{target:{value:'sayadi'}})
    fireEvent.change(cityInput,{target:{value:'fremont'}})
    fireEvent.change(stateInput,{target:{value:'ca'}})
    fireEvent.change(zipInput,{target:{value:'123'}})

    const newContact = screen.getByText(/ahmad/i)
    expect(newContact).toBeInTheDocument();
 
});

test("form shows success message on submit with form details", () => {
    render(<CheckoutForm/>)
    const CheckoutButton = screen.chec(/checkout/i);
     fireEvent.click(submitButton);

});