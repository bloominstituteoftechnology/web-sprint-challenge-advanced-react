import React from "react";
import { render, fireEvent } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
  const { getByText } = render(<CheckoutForm />);

  const header = getByText(/checkout form/i);

  expect(header).toBeInTheDocument();
});

test("form shows success message on submit with form details", () => {
  const { getByLabelText, getByText, findAllByText, getByTestId } = render(
    <CheckoutForm />
  );

  fireEvent.change(getByLabelText(/first name/i), {
    target: { value: "Cody" }
  });
  fireEvent.change(getByLabelText(/last name/i), {
    target: { value: "Branson" }
  });
  fireEvent.change(getByLabelText(/address/i), {
    target: { value: "1234 Bees Wax Not Yours" }
  });
  fireEvent.change(getByLabelText(/city/i), {
    target: { value: "Mars" }
  });
  fireEvent.change(getByLabelText(/state/i), {
    target: { value: "Outer Space" }
  });
  fireEvent.change(getByLabelText(/zip/i), {
    target: { value: "99999" }
  });

  const checkoutButton = getByLabelText(/checkout/i);

  fireEvent.click(checkoutButton);

  findAllByText(/Cody/i);

  expect(getByTestId("successMessage")).toBeInTheDocument();
});
