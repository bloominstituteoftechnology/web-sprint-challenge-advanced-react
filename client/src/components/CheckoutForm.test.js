import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
  const { getByText } = render(<CheckoutForm />);

  getByText(/Checkout Form/i);
});

test("form shows success message on submit with form details", async () => {
  const { getByText, getByLabelText, getByTestId } = render(<CheckoutForm />);

  const firstName = getByLabelText(/first name/i);
  const lastName = getByLabelText(/last name/i);
  const address = getByLabelText(/address/i);
  const city = getByLabelText(/city/i);
  const state = getByLabelText(/state/i);
  const zip = getByLabelText(/zip/i);
  const button = getByTestId("checkout-button");

  fireEvent.change(firstName, { target: { value: "Benjamin" } });
  fireEvent.change(lastName, { target: { value: "Venker" } });
  fireEvent.change(address, { target: { value: "60 Dearborn" } });
  fireEvent.change(city, { target: { value: "San Francisco" } });
  fireEvent.change(state, { target: { value: "CA" } });
  fireEvent.change(zip, { target: { value: "94110" } });

  fireEvent.click(button);

  const response = await waitFor(() => {
    getByTestId("successMessage");
  });

  const name = getByText("Benjamin Venker", { exact: false });
  const streetAddress = getByText("60 Dearborn", { exact: false });
  const cityStateZip = getByText("San Francisco, CA 94110", { exact: false });

  expect(name).toBeInTheDocument();
  expect(streetAddress).toBeInTheDocument();
  expect(cityStateZip).toBeInTheDocument();
});
