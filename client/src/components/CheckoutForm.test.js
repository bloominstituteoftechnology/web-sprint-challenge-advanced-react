import React from "react";
import { render, fireEvent } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
  //Arrange
  const {getByText} = render(<CheckoutForm/>)
  const header = getByText(/Checkout Form/i)
  //assert
  expect(header).toBeInTheDocument()
});

test("form shows success message on submit with form details", async () => {
  //Arrange
  const {getByText} = render(<CheckoutForm/>)
  //Act
  const order = getByText(/Zip/i)

  const button = getByText(/CHECKOUT/i)

  fireEvent.click(button)

  //Assert
  expect(order).toHaveTextContent("Aaron")





});
