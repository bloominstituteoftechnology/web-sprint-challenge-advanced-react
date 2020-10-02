import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    render(<CheckoutForm />)
    const header = screen.getByRole(/heading/i)
    expect(header).toBeVisible()
});

test("form shows success message on submit with form details", () => {
    render(<CheckoutForm />);

    const firstNameInput = screen.getByLabelText(/first name/i)
    const lastNameInput = screen.getByLabelText(/last name/i)
    const addressInput = screen.getByLabelText(/address/i)
    const cityInput = screen.getByLabelText(/city/i)
    const stateInput = screen.getByLabelText(/state/i)
    const zipInput = screen.getByLabelText(/zip/i)
    const buttonInput = screen.getByRole(/button/i, {name:/checkout/i})


    fireEvent.change(firstNameInput, {target:{name:"firstName", value:"timmy"}})
    fireEvent.change(lastNameInput, {target:{name:"lastName", value:"timmyson"}})
    fireEvent.change(addressInput, {target:{name:"address", value:"house"}})
    fireEvent.change(cityInput, {target:{name:"city", value:"Taco Town"}})
    fireEvent.change(stateInput, {target:{name:"state", value:"Alabama"}})
    fireEvent.change(zipInput, {target:{name:"zip", value:"6911"}})
    

    expect(buttonInput).toBeInTheDocument()
    fireEvent.click(buttonInput)


    const successMessage = screen.getByTestId(/successmessage/i)

    expect(successMessage).toBeVisible()

    expect(firstNameInput.value === "timmy").toBeTruthy()
    expect(lastNameInput.value === "timmyson").toBeTruthy()
    expect(addressInput.value === "house").toBeTruthy()
    expect(cityInput.value === "Taco Town").toBeTruthy()
    expect(stateInput.value === "Alabama").toBeTruthy()
    expect(zipInput.value === "6911").toBeTruthy()


});
