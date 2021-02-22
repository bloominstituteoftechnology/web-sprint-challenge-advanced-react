import React from "react";
import { render } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import userEvent from "@testing-library/user-event";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    //arrange 
    render(<CheckoutForm/>) 
    const headerInput = screen.getLabelByText(/checkout form/i)

    userEvent.type(headerInput)

});
// finish
test("form shows success message on submit with form details", () => {
const submitBtn = screen.getLabelByText(/You have ordered some plants! Woo-hoo!/i)

userEvent.type(submitBtn)
});
