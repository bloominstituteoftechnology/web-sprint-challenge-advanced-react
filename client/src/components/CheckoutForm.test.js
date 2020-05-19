import React from "react";
import {render, getByText, getByTestId, fireEvent} from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {

    //Arrange
    const container = render(<CheckoutForm/>);

    const header = container.getByText("Checkout Form")

    expect(header).toBeInTheDocument();


});

test("form shows success message on submit with form details", () => {

    const container = render(<CheckoutForm />); 

    const firstInput = container.getByTestId("firstName");    
    const lastInput = container.getByTestId(/lastName/i);
    const addressInput = container.getByTestId(/address/i);
    const cityInput = container.getByTestId(/city/i);
    const stateInput = container.getByTestId(/state/i);
    const zipInput = container.getByTestId(/zip/i);
 
    fireEvent.change(firstInput, {target: { value: "Brian"}});
    fireEvent.change(lastInput, {target: { value: "Clayton"}});
    fireEvent.change(addressInput, {target: { value: "123 elm street"}}); 
    fireEvent.change(cityInput, {target: { value: "Pittsburgh"}});
    fireEvent.change(stateInput, {target: { value: "PA"}});
    fireEvent.change(zipInput, {target: { value: "15221"}});


 

 
    const button = container.getByTestId( "Checkout" );

    fireEvent.click(button);
    const success = container.getByTestId("successMessage")
    expect(success).toBeInTheDocument();
    




});
