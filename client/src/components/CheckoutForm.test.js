import React from "react";
import { render, fireEvent } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import { act } from "react-dom/test-utils";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
  const { getByTestId } = render(<CheckoutForm />);

  expect(getByTestId("header")).toHaveTextContent("Checkout Form");
  // expect(getByTestId('header')).toHaveTextContent('h')
});

test("form shows success message on submit with form details", async () => {
  const { getByLabelText, getByRole, getByTestId } = render(<CheckoutForm />);

  await act(async () => {
    fireEvent.change(getByLabelText("First Name:"), {
      target: { value: "Brandon" },
    });
    fireEvent.click(getByRole('button'))
  });

  expect(getByLabelText("First Name:")).toHaveValue("Brandon");
  expect(getByTestId('successMessage')).toHaveTextContent(/ordered/i)
});
