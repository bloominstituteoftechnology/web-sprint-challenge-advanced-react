import React from "react";
import MutationObserver from 'mutationobserver-shim';
import { screen, render ,waitFor} from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import userEvent from '@testing-library/user-event';


// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    render (<CheckoutForm />);

    const headerElement = screen.queryByText(/Checkout Form/i) // the i means case insensitive*
    console.log(headerElement);
    expect(headerElement).toBeInTheDocument();
});


test("shows success message on submit with form details",  () => {
    render(<CheckoutForm />);

    const button = screen.getByRole("button");
    userEvent.click(button);

    // await waitFor(()=>{
        const successMessages = screen.getByText(/You have ordered some plants! Woo-hoo!/i);
        expect(successMessages).toBeInTheDocument();
    // })
});






































