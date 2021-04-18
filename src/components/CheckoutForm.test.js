import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
  render(<CheckoutForm />);
  let header = screen.queryByText(/checkout form/i);

  expect(header).toBeInTheDocument();
});

test("form shows success message on submit with form details", () => {
  render(<CheckoutForm />);

  let fName = screen.queryByLabelText(/First Name:/i);
  let lName = screen.queryByLabelText(/Last Name:/i);
  let address = screen.queryByLabelText(/Address:/i);
  let city = screen.queryByLabelText(/City:/i);
  let state = screen.queryByLabelText(/State:/i);
  let zip = screen.queryByLabelText(/Zip:/i);
  let button = screen.queryByRole("button");

  userEvent.type(fName, "Test");
  userEvent.type(lName, "test");
  userEvent.type(address, "test");
  userEvent.type(city, "test");
  userEvent.type(state, "test");
  userEvent.type(zip, "99999");
  userEvent.click(button);

  let checkout = screen.queryByText(
    /Your new green friends will be shipped to:/i
  );

  expect(checkout).toBeInTheDocument();
});
