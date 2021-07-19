import React from "react";
import { render } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    const {getByText} = render(
    <CheckoutForm>
        <h2>Checkout Form</h2>
    </CheckoutForm>
    )
    const message = getByText(/Contact Form/i)
   
    expect(message).toBeTruthy();
});

test("form shows success message on submit with form details" () => {
    render(<CheckoutForm>)
            const successMessage = await screen.findByText(/lastName is a required field./i);
    expect(errorMessage).toBeInTheDocument();  
}

);
       