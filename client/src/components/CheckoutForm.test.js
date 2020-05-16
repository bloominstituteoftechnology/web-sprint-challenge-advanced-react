import React from "react";
import { render, getByLabelText, fireEvent } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {

    //Arrange
    const container = render(<CheckoutForm/>);

    const header = container.getByText("Checkout Form")

    expect(header).toBeInTheDocument();


});

test("form shows success message on submit with form details", () => {

    const {getByLabelText, getByText} = render(<CheckoutForm />);

    const firstInput = getByLabelText();
    const lastInput = getByLabelText();
    const addressInput = getByLabelText();
    const cityInput = getByLabelText();
    const stateInput = getByLabelText();
    const zipInput = getByLabelText();

    const button = getByText();

    fireEvent.click(getByTex(/Checkout/1));
    expect()




});
