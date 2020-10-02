import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {});
//arrange
render(<CheckoutForm />);
//act
const header = screen.getByText(/checkout form/i);
//assert
expect(header).toBeInTheDocument();

// test("form shows success message on submit with form details", () => {});
// //arrange
// render(<CheckoutForm />);
// //act
// const message = screen.getByTestId * /data-testid/;
// //assert
// expect(successMessage, { target: { successMessage: "", value: "" } });
