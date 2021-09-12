import React from "react";
import { render } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import App from "../App"
// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    render(<App/>);
    const header = screen.getByRole(heading);

    expect(header).toHaveTextContent(/React Plants/i)
    expect(header).toHaveTextContent(/Plants/i)
    expect(header).toHaveTextContent(/Carts/i)

});

test("form shows success message on submit with form details", () => {
    render(<CheckoutForm/>);

    const successMessage = screen.queryByTestId(/successMessage/i);
    expect(successMessage).toBeInTheDocument();
    screen.debug
});
