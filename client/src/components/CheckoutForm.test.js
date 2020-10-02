import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
  //ARRANGE
  render(<CheckoutForm />);

  //ACT
  const formHeader = screen.getByTestId("checkoutHeader");

  //ASSERT
  expect(formHeader).toBeInTheDocument();
});

test("form shows success message on submit with form details", async () => {
  //ARRANGE
  render(<CheckoutForm />);

  //ACT
  const firstName = screen.getByLabelText(/first name/i);
  const lastName = screen.getByLabelText(/last name/i);
  const address = screen.getByLabelText(/address/i);
  const city = screen.getByLabelText(/city/i);
  const state = screen.getByLabelText(/state/i);
  const zip = screen.getByLabelText(/zip/i);
  const button = screen.getByRole("button", { name: /checkout/i });

  fireEvent.change(firstName, {
    target: { name: "firstName", value: "Steven" },
  });

  fireEvent.change(lastName, {
    target: { name: "lastName", value: "Sussman" },
  });

  fireEvent.change(address, {
    target: { name: "address", value: "123 Wayword Street" },
  });

  fireEvent.change(city, {
    target: { name: "city", value: "New York" },
  });

  fireEvent.change(state, {
    target: { name: "state", value: "New York" },
  });

  fireEvent.change(zip, {
    target: { name: "zip", value: "10017" },
  });

  fireEvent.click(button);

  //ASSERT
  const congrats = await screen.findByText(/woo-hoo/i);
});
