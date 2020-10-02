import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows



test("header renders", () => {

    const { getByText } = render(<CheckoutForm />);

    const Header = getByText("Checkout Form");

        expect(Header).toBeInTheDocument;
  });






test("form shows success message on submit with form details", () => {

    render(<CheckoutForm />)

    const firstNameInput = screen.getByLabelText(/first name:/i)

    const lastNameInput = screen.getByLabelText(/last name:/i)

    const addressInput = screen.getByLabelText(/address:/i)

    const cityInput = screen.getByLabelText(/city:/i)

    const stateInput = screen.getByLabelText(/state:/i)

    const zipInput = screen.getByLabelText(/zip:/i)




    fireEvent.change(firstNameInput, {target: {value: 'Battle' }})

    fireEvent.change(lastNameInput, {target: {value: 'Cat'}})

    fireEvent.change(addressInput, {target: {value: '616 Castle Grayskull Cir'}})

    fireEvent.change(cityInput, {target: {value: 'Skeletor'}})

    fireEvent.change(stateInput, {target: {value: 'WA'}})

    fireEvent.change(zipInput, {target: {value: '66666'}})



    const submitButton = screen.getByTestId(/button/i)
    fireEvent.click(submitButton)


    const success = screen.getByTestId(/successMessage/i);
    expect(success).toBeInTheDocument;


});
