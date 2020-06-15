import React from "react";
import { render, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
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
    //const element = getByTestId(/successmessage/i);
    const elementButton = getByTestId(/buttonId/i);

    const leftClick = {button: 0}
    fireEvent.click(elementButton, leftClick);
    expect(getByTestId(/successmessage/i)).toBeInTheDocument();



});
