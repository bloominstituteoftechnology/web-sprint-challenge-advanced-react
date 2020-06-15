import React from "react";
import { render, fireEvent, getByTestId } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {

    const { getByText } = render(<CheckoutForm />);

    // Act
    getByText(/Checkout Form/i);
});



test("form shows success message on submit with form details", () => {
   
    const { getByTestId } = render(<CheckoutForm />);
    const Checking = getByTestId(/successMessage/i)
    fireEvent.change(Checking, {target: {value: "Success"}})
    fireEvent.click(getByTestId(/successMessage/i))
    

    // Act
    
});
    

