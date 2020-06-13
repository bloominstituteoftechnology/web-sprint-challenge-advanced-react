import React from "react";
import { render } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    //Arrange
    const { getByText } = render(<CheckoutForm />);
    //Act
    getByText(/checkout form/i);
    //Assert
});
    

test("form shows success message on submit with form details", () => {
    const { getByTestId } = render(<CheckoutForm />);
    fireEvent.change(getByTestId(/successmessage/i), {

    })
    
});
