import React from "react";
import { fireEvent, render,screen } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    render(<CheckoutForm/>)
    const header= screen.getByText(/checkout form/i);

});

test("form shows success message on submit with form details", async() => {
    render(<CheckoutForm/>)
// arrange 
const firstName=screen.getByLabelText(/first name/i);
const lastName=screen.getByLabelText(/last name/i);
const address=screen.getByLabelText(/address/i);
const city=screen.getByLabelText(/city/i);
const state=screen.getByLabelText(/state/i);
const zip=screen.getByLabelText(/zip/i);
const button=screen.getByRole('button',{name:/checkout/i});

// act
fireEvent.change(firstName,{target:{value:'Terry'}});
fireEvent.change(lastName,{target:{value:'Edwards'}});
fireEvent.change(address,{target:{value:'3555 sedona'}});
fireEvent.change(city,{target:{value:'Tally'}});
fireEvent.change(state,{target:{value:'FL'}});
fireEvent.change(zip,{target:{value:'323'}});
fireEvent.click(button)

// assert 
const firstNameInput= await screen.findByText(/terry/i)
const lastNameInput= await screen.findByText(/edwards/i)
const addressInput= await screen.findByText(/3555 sedona/i)
const cityInput= await screen.findByText(/tally/i)
const stateInput= await screen.findByText(/Fl/i)
const zipInput= await screen.findByText(/323/i)
const successLine1= await screen.findByText(/You have ordered some plants!/i);
const successLine2= await screen.findByText(/Your new green friends will be shipped to:/i);

expect(successLine1).toHaveTextContent(/You have ordered some plants!/i)
expect(successLine2).toHaveTextContent(/Your new green friends will be shipped to:/i)
expect(firstNameInput).toHaveTextContent(/terry/i)
expect(lastNameInput).toHaveTextContent(/edwards/i)
expect(addressInput).toHaveTextContent(/3555 sedona/i)
expect(cityInput).toHaveTextContent(/tally/i)
expect(stateInput).toHaveTextContent(/Fl/i)
expect(zipInput).toHaveTextContent(/323/i)




});

