import React from "react";
import { render , screen , fireEvent} from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
   render(<CheckoutForm/>) 
   const header = screen.getByText(/Checkout Form/i)
   expect(header).toBeInTheDocument()

});

test("form shows success message on submit with form details", () => {
    render(<CheckoutForm/>);

    const firstNameInput = screen.getByLabelText(/first name/i)
    const lastNameInput = screen.getByLabelText(/last name/i)
    const addressInput = screen.getByLabelText(/address/i)
    const cityInput = screen.getByLabelText(/city/i)
    const stateInput = screen.getByLabelText(/state/i)
    const zipInput = screen.getByLabelText(/zip/i)

    
    fireEvent.change(firstNameInput, {target: {value: 'Jazmine'}})
    fireEvent.change(lastNameInput, {target: {value: 'McGinnis'}})
    fireEvent.change(addressInput, {target: {value: '100th Way S'}})
    fireEvent.change(cityInput, {target: {value: 'Redmond'}})
    fireEvent.change(stateInput, {target: {value: 'WA'}})
    fireEvent.change(zipInput, {target: {value: '98052'}})

    const submitButton = screen.getByTestId(/submit/i)
    fireEvent.click(submitButton)

    const successMesage = screen.getByTestId(/successMessage/i)
    
});
