import React from "react";
import { render, waitFor, fireEvent } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders",() => {
  const {getByText} = render(<CheckoutForm />);
    expect(getByText("Checkout Form")).toBeTruthy()
});``

test("form shows success message on submit with form details",async () => {
  const {getByTestId} = render(<CheckoutForm />);
  await waitFor(() => {
    fireEvent.input(getByTestId("firstName"), "Mark")
    fireEvent.input(getByTestId("lastName"), "Sayers")
    fireEvent.input(getByTestId("address"), "123 Paisley Rd.")
    fireEvent.input(getByTestId("city"), "OKC")
    fireEvent.input(getByTestId("state"), "Ok")
    fireEvent.input(getByTestId("zip"), "12345")
    fireEvent.click(getByTestId("Checkout"))
  });
  expect(getByTestId("successMessage")).toBeTruthy()
});