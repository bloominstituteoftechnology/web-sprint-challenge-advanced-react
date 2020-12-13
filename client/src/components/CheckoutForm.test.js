import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event'
import CheckoutForm from "./CheckoutForm";
import App from "../App.js";
import '@testing-library/jest-dom/extend-expect';

test("form header renders", () => {
    //Arrange 
    render(<App/>)

    //Act
    const header = screen.getByText(/React Plants/);

    //Assert
    expect(header).toBeInTheDocument()
});

test("form shows success message on submit with form details", () => {
    //Arrange
    render(<CheckoutForm/>)

    const firstName = screen.getByLabelText(/First Name:/)
    const lastName = screen.getByLabelText(/Last Name:/)
    const address = screen.getByLabelText(/Address:/)
    const city = screen.getByLabelText(/City:/)
    const state = screen.getByLabelText(/State:/)
    const zip = screen.getByLabelText(/Zip:/)

    const userInfo = {
        firstName: "Mr",
        lastName: "Robot",
        address: "3027 West 12th Street, Coney Island",
        city: "Brooklyn",
        state: "New York City",
        zip: "11224",
    }

    //Act
    userEvent.type(firstName, userInfo.firstName)
    userEvent.type(lastName, userInfo.lastName)
    userEvent.type(address, userInfo.address)
    userEvent.type(city, userInfo.city)
    userEvent.type(state, userInfo.state)
    userEvent.type(zip, userInfo.zip)
    
    //Assert
    expect(firstName).toHaveValue("Mr")
    expect(lastName).toHaveValue("Robot")
    expect(address).toHaveValue("3027 West 12th Street, Coney Island")
    expect(city).toHaveValue("Brooklyn")
    expect(state).toHaveValue("New York City")
    expect(zip).toHaveValue("11224")

    fireEvent.click(screen.getByText('Checkout'))

    expect(screen.getByTestId(/successMessage/)).toBeInTheDocument()
});
