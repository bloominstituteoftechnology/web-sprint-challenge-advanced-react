import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
  //arrange
  render(<CheckoutForm />);
  //act
  const header = screen.getByText(/checkout form/i);
  //assert
  expect(header).toBeInTheDocument();
});

test("form shows success message on submit with form details", () => {
  //arrange
  render(<CheckoutForm />);
  //act
  const firstName = screen.getByLabelText(/First Name:/i);
  const lastName = screen.getByLabelText(/Last Name:/i);
  const address = screen.getByLabelText(/Address:/i);
  const city = screen.getByLabelText(/City:/i);
  const state = screen.getByLabelText(/State:/i);
  const zip = screen.getByLabelText(/Zip:/i);

  //assert
  fireEvent.change(firstName, { target: { value: "Christoper" } });
  fireEvent.change(lastName, { target: { value: "Stankiewicz" } });
  fireEvent.change(address, { target: { value: "324 W 3rd St" } });
  fireEvent.change(city, { target: { value: "Nescopeck" } });
  fireEvent.change(state, { target: { value: "PA" } });
  fireEvent.change(zip, { target: { value: "18635" } });

  const checkout = screen.getByRole("button", { name: /checkout/i });
  fireEvent.click(checkout);
});
