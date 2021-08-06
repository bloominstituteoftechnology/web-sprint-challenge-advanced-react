import React from "react";
import { render, screen } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import userEvent from "@testing-library/user-event";

// Write up the two tests here and make sure they are testing what the title shows

test("1 form header renders", () => {
    //arrange set up component CheckoutForm to test import screen too
    render (<CheckoutForm />);
    //act - get header by matching text of h1
    const header = screen.queryByText(/Checkout Form/i);
    //assert - expect it in the DOM and perhaps truthy
    console.log(header);
    expect(header).toBeInTheDocument();//can use either
    expect(header).toBeVisible();//can use any of these
    expect(header).toHaveTextContent(/Checkout Form/i);
    expect(header).toBeTruthy();
    expect(header).not.toBeFalsy();
    //another example to just have plenty of options
    const h2 = screen.queryByTestId('testh2');
    expect(h2).toBeInTheDocument();//can also tag with an id and use any of these 
    });
    

test("form shows success message on submit with form details", () => {});
