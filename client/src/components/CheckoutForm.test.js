import React from "react";
import { render, screen } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    //Arrange
    render(<CheckoutForm />);

    //Act
    const header = screen.queryByRole('h2');

    //Assert
    expect(header).toHaveTextContent(/checkout form/i);
});

// test("form shows success message on submit with form details", () => {});
