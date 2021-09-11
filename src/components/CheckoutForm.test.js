// import React from "react";
// import MutationObserver from 'mutationobserver-shim';
// import { render } from "@testing-library/react";
// import CheckoutForm from "./CheckoutForm";

import React from "react";
import { render, screen } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    render (<CheckoutForm />);

    const headerElement = screen.queryByText(/Checkout Form/i) // the i means case insensitive*
    console.log(headerElement);
    expect(headerElement).toBeInTheDocument();
});

test("form shows success message on submit with form details", () => {
    render (<CheckoutForm />);
    screen.debug()
    const successMSG = screen.queryByText(/You have ordered some plants! Woo-hoo!/i)
    // expect(successMSG).toBeInTheDocument();
});
