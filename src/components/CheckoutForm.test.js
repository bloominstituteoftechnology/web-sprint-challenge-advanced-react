import React from "react";
import { render, screen } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    render(<CheckoutForm />);

    //Arrange
    const checkoutFormHeader = screen.getByText(/Checkout Form/i);



    //Act
    expect(checkoutFormHeader).toBeInTheDocument();



    //Assert
    expect(checkoutFormHeader).toBeVisible();

});

test("form shows success message on submit with form details", () => {});
