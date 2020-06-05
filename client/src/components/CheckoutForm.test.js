import React from "react";
import { render, getByLabelText, fireEvent } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("The form shows success message upon submit", () => {
    const { getByLabelText, getByText, findAllByText }= render(<CheckoutForm />);

        const firstNameInput = getByLabelText(/First Name/i);
        const lastNameInput = getByLabelText(/Last Name/i);

        const addressInput = getByLabelText(/Address/i);

        fireEvent.change(firstNameInput, {
            target: { name: "firstName", value: "William "}
        });
        fireEvent.change(lastNameInput, {
            target: { name: "lastName", value: "Bell" }
          });
          fireEvent.change(addressInput, {
            target: { name: "address", value: "484 Seasame Street" }
          });
});

