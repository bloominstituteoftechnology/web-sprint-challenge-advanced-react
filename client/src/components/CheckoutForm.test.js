import React from "react";
import { render, fireEvent, getByText, getByTestId } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    const { getByText } = render(<CheckoutForm />);

    const checkoutHeader = getByText(/checkout form/i);
});

test("form shows success message on submit with form details", () => {
  const { getByLabelText, getByTestId, getByDisplayValue } = render(<CheckoutForm />);

  const firstNameInput = getByLabelText(/first name/i);
  const lastNameInput = getByLabelText(/last name/i);
  const addressInput = getByLabelText(/address/i);
  const cityInput = getByLabelText(/city/i);
  const stateInput = getByLabelText(/state/i);
  const zipInput = getByLabelText(/zip/i);

  expect(firstNameInput).toBeInTheDocument();
  expect(lastNameInput).toBeInTheDocument();
  expect(addressInput).toBeInTheDocument();
  expect(cityInput).toBeInTheDocument();
  expect(stateInput).toBeInTheDocument();
  expect(zipInput).toBeInTheDocument();

  fireEvent.change(firstNameInput, { target: { value: "Emilio" }})
  fireEvent.change(lastNameInput, { target: { value: "Diaz" }})
  fireEvent.change(addressInput, { target: { value: "398 VanBussum Ave" }})
  fireEvent.change(cityInput, { target: { value: "Garfield" }})
  fireEvent.change(stateInput, { target: { value: "New Jersey" }})
  fireEvent.change(zipInput, { target: { value: 7026 }})

  expect(getByDisplayValue(/emilio/i)).toBeInTheDocument()
  expect(getByDisplayValue(/diaz/i)).toBeInTheDocument()
  expect(getByDisplayValue(/398 vanbussum ave/i)).toBeInTheDocument()
  expect(getByDisplayValue(/garfield/i)).toBeInTheDocument()
  expect(getByDisplayValue(/new jersey/i)).toBeInTheDocument()
  expect(getByDisplayValue(/7026/i)).toBeInTheDocument()

  const checkoutSubmit = getByTestId(/submitCheckout/i);
  expect(checkoutSubmit).toBeInTheDocument();
  fireEvent.click(checkoutSubmit)

  const successMessage = getByTestId(/successMessage/i)
  expect(successMessage).toBeInTheDocument()
});
