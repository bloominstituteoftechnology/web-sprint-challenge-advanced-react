import React from "react";
import { render, screen, fireEvent, getByText, getByTestId  } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    const { getByText } = render(<CheckoutForm />);
    const headerText = getByText(/checkout form/i)
    expect(headerText).toBeInTheDocument();
});

test("form shows success message on submit with form details", async () => {
    const simulatedDom = render(<CheckoutForm/>);
    const firstName = simulatedDom.getByLabelText(/First Name:/i);
    const submit = screen.getByRole('button');
    fireEvent.change(firstName, { target: { value: 'TestName' } });
    fireEvent.click(submit);
    expect(await screen.findByText(/TestName/i)).toBeInTheDocument();
});
