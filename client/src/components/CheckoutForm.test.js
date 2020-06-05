import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";



// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    //Arrange
    const { getByText } = render(<CheckoutForm />)

    //Act
    const header = getByText(/checkout form/i)

    //Assert
    expect(header).toBeInTheDocument()

});

test("form shows success message on submit with form details", () => {
    //Arrange --> query for inputs and run change event
    // const { getByLabelText, getByTestId, rerender, getByText } = render(<CheckoutForm />)
    render(<CheckoutForm />)

    const firstNameInput = screen.getByLabelText(/first name/i)
    const lastNameInput = screen.getByLabelText(/last name/i)
    const addressInput = screen.getByLabelText(/address/i)
    const cityInput = screen.getByLabelText(/city/i)
    const stateInput = screen.getByLabelText(/state/i)
    const zipInput = screen.getByLabelText(/zip/i)

    fireEvent.change(firstNameInput, { target: { value: 'Marta' } })
    fireEvent.change(lastNameInput, { target: { value: 'Krawczyk' } })
    fireEvent.change(addressInput, { target: { value: '666 St' } })
    fireEvent.change(cityInput, { target: { value: 'Hell' } })
    fireEvent.change(stateInput, { target: { value: 'MA' } })
    fireEvent.change(zipInput, { target: { value: '00000' } })


    expect(firstNameInput.value).toBe('Marta')
    expect(lastNameInput.value).toBe('Krawczyk')
    expect(addressInput.value).toBe('666 St')
    expect(cityInput.value).toBe('Hell')
    expect(stateInput.value).toBe('MA')
    expect(zipInput.value).toBe('00000')


    // const grabName= getByText(/marta/i)
    //^ above fails, which is good

    //Click the checkout button
    const checkoutButton = screen.getByText('Checkout')
    //Why is /checkout/i now working..
    fireEvent.click(checkoutButton)

    //Assert
    const grabName= screen.getByText(/marta/i)
    expect(grabName).toBeInTheDocument()
    //^ above passes, which is good

    const success = screen.getByTestId(/successMessage/i)
    expect(success).toBeInTheDocument()

    // rerender(<CheckoutForm />)
});
