import React from "react";
import { render, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    const { getByText } = render(<CheckoutForm />);
    const h2 = getByText(/checkout form/i);
    expect(h2).toBeInTheDocument();
});

test("form shows success message on submit with form details", async () => {
    const { getByLabelText, getByText, getByTestId, debug } = render(<CheckoutForm />);
    // First Name
      const firstName = getByLabelText(/first name/i);
      await userEvent.type(firstName, "Logan");
      expect(firstName).toHaveValue("Logan");
    // Last name
      const lastName = getByLabelText(/last name/i);
      await userEvent.type(lastName, "Metzger");
      expect(lastName).toHaveValue("Metzger");
    // Address
      const address = getByLabelText(/address/i);
      await userEvent.type(address, "111 Address");
      expect(address).toHaveValue("111 Address");
    // City
      const city = getByLabelText(/city/i);
      await userEvent.type(city, "Boston");
      expect(city).toHaveValue("Boston");
    // State
      const state = getByLabelText(/state/i);
      await userEvent.type(state, "Massachusetts");
      expect(state).toHaveValue("Massachusetts");
    // Zip code
      const zip = getByLabelText(/zip/i);
      await userEvent.type(zip, "02145");
      expect(zip).toHaveValue("02145");
    // Submit Button
      const btn = getByText("Checkout");
      expect(btn).toBeInTheDocument();
      await userEvent.click(btn);
    // Success message
      const success = getByTestId("successMessage");
      expect(success).toBeInTheDocument();
});
