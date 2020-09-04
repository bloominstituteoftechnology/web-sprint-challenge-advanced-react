import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
  render(<CheckoutForm />);
});

test("form shows success message on submit with form details", () => {
  const { getByLabelText } = render(<CheckoutForm />);

  const firstNameInput = getByLabelText(/First Name:/i);
  const lastNameInput = getByLabelText(/Last Name:/i);
  const addressInput = getByLabelText(/Address:/i);
  const cityInput = getByLabelText(/City:/i);
  const stateInput = getByLabelText(/State:/i);
  const zipInput = getByLabelText(/Zip:/i);

  fireEvent.change(firstNameInput, {
    target: { name: "firstName", value: "Emily" },
  });
  fireEvent.change(firstNameInput, {
    target: { name: "lastName", value: "Adams" },
  });
  fireEvent.change(firstNameInput, {
    target: { name: "address", value: "2000 Washington St" },
  });
  fireEvent.change(firstNameInput, {
    target: { name: "city", value: "Jacksonville" },
  });
  fireEvent.change(firstNameInput, {
    target: { name: "state", value: "FL" },
  });
  fireEvent.change(firstNameInput, {
    target: { name: "zip", value: "27003" },
  });

  const submitButton = screen.getByTestId(/submit/i);
  fireEvent.click(submitButton);
});
