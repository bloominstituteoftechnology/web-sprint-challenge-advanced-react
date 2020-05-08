import React from "react";
import { render, fireEvent, getByText, getByTestId } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
     const { getByText } = render(<CheckoutForm />)
     const formHeader = getByText(/checkout form/i)
     expect(formHeader).toBeInTheDocument()
});

test("form shows success message on submit with form details", () => {
     const { getByTestId, getByLabelText, getByText } = render (<CheckoutForm />)

     const firstName = getByLabelText(/first name:/i)
     const lastName = getByLabelText(/last name:/i)
     const address = getByLabelText(/address:/i)
     const city = getByLabelText(/city:/i)
     const state = getByLabelText(/state:/i)
     const zip = getByLabelText(/zip:/i)
     const checkoutButton = getByTestId('checkoutButton')

     expect(firstName).toBeInTheDocument()
     expect(lastName).toBeInTheDocument()
     expect(address).toBeInTheDocument()
     expect(city).toBeInTheDocument()
     expect(state).toBeInTheDocument()
     expect(zip).toBeInTheDocument()
     expect(checkoutButton).toBeInTheDocument()

     fireEvent.change(firstName, { target: { value: 'Willy' } })
     fireEvent.change(lastName, { target: { value: 'Wonka' } })
     fireEvent.change(address, { target: { value: '123 Chocolate Factory Ln' } })
     fireEvent.change(city, { target: { value: 'Industrial' } })
     fireEvent.change(state, { target: { value: 'England' } })
     fireEvent.change(zip, { target: { value: '88392810848937297398' } })

     fireEvent.click(checkoutButton)

     const successMessage = getByTestId('successMessage')
     expect(successMessage).toBeInTheDocument()

     const successMessageName = getByText(/willy wonka/i)
     const successMessageAddress = getByText(/123 chocolate factory ln/i)
     const successMessageCity = getByText(/industrial/i)     
     const successMessageState = getByText(/england/i)
     const successMessageZip = getByText(/88392810848937297398/i)

     expect(successMessageName).toBeInTheDocument()
     expect(successMessageAddress).toBeInTheDocument()
     expect(successMessageCity).toBeInTheDocument()
     expect(successMessageState).toBeInTheDocument()
     expect(successMessageZip).toBeInTheDocument()


});
