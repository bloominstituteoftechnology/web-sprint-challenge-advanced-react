import React from "react";
import { render, fireEvent } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    render(<CheckoutForm />);
});

test("form shows success message on submit with form details", async () => {
    const container = render(<CheckoutForm />);
    const firstName = container.getByPlaceholderText('First Name');
    const submit = container.getAllByTestId('submit');

    fireEvent.change(firstName, {target: {value: 'Trevor'}});
    expect(firstName.value).toBe('Trevor');

    fireEvent.click(submit);
    const message = await container.getByTestId('successMessage');
    expect(message).toBeVisible();
});

