import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import userEvent from "@testing-library/user-event";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
  render(<CheckoutForm />);

  const header = screen.getByText("Checkout Form");

  expect(header).toBeInTheDocument();
});

test("form shows success message on submit with form details", async () => {
  render(<CheckoutForm />);

  //   const name = screen.getByLabelText("First Name:");

  //   userEvent.type(name, "ALDO");

  const btn = screen.getByRole("button");

  userEvent.click(btn);

  const submittedSuccess1 = await screen.getByText(
    "You have ordered some plants! Woo-hoo!"
  );

  expect(submittedSuccess1).toBeVisible();
});
