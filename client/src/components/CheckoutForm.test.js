import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
  const { getByText } = render(<CheckoutForm />);

  const header = getByText(/checkout form/i);
  expect(header).toBeInTheDocument();
});

test("form shows success message on submit with form details", () => {
  render(<CheckoutForm />);

  const firstNameInput = screen.getByLabelText(/first name/i);
  const lastNameInput = screen.getByLabelText(/last name/i);
  const addressInput = screen.getByLabelText(/address/i);
  const cityInput = screen.getByLabelText(/city/i);
  const stateInput = screen.getByLabelText(/state/i);
  const zipInput = screen.getByLabelText(/zip/i);

  fireEvent.change(firstNameInput, {
    target: {
      value: "Laura",
    },
  });
  fireEvent.change(lastNameInput, {
    target: {
      value: "Reed",
    },
  });
  fireEvent.change(addressInput, {
    target: {
      value: "123 Sesame St.",
    },
  });
  fireEvent.change(cityInput, {
    target: {
      value: "Boise",
    },
  });
  fireEvent.change(stateInput, {
    target: {
      value: "ID",
    },
  });
  fireEvent.change(zipInput, {
    target: {
      value: "00000",
    },
  });

  expect(firstNameInput.value).toBe("Laura");
  expect(lastNameInput.value).toBe("Reed");
  expect(addressInput.value).toBe("123 Sesame St.");
  expect(cityInput.value).toBe("Boise");
  expect(stateInput.value).toBe("ID");
  expect(zipInput.value).toBe("00000");
  // const grabName= getByText(/laura/i)
  const checkoutButton = screen.getByText("Checkout");
  fireEvent.click(checkoutButton);

  const grabName = screen.getByText(/laura/i);
  expect(grabName).toBeInTheDocument();

  const success = screen.getByTestId(/successMessage/i);
  expect(success).toBeInTheDocument();
});
