import React from "react";
import { render, fireEvent } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

// test("form header renders", () => {});

// test("form shows success message on submit with form details", () => {});



test("form header renders", () => {
    const container = render(<CheckoutForm />);
});

test("form shows success message on submit with form details", () => {
    // const showSuccessMessage = jest.fn();
    // // const { getByTestId } = render(<CheckoutForm onSubmit={onSubmit} />)
    // const { getByTestId } = render(<div success-message showSuccessMessage />)

    const { getByTestId } = render("theForm");


    let showSuccess = getByTestId("successMessage");

    
    expect(showSuccess.textContent).toBe("");
    
    const showSuccessBtn = getByTestId("checkoutBtn");

    fireEvent.click(showSuccessBtn)

    expect(showSuccess.textContent).toBe("You have ordered some plants! Woo-hoo!");
});