import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    render (<CheckoutForm />);
});

test("form shows success message on submit with form details", () => {
    render ( <CheckoutForm />);

 const firstNameInput = screen.getByLabelText("First Name:");
 const lastNameInput = screen.getByLabelText("Last Name:");
 const addressInput = screen.getByLabelText("Address:");
 const submitButton = screen.getByRole("button");

 userEvent.type(firstNameInput, "Bipin");
 userEvent.type(lastNameInput, "Shrestha");
 userEvent.type(addressInput, "California");
 userEvent.click(submitButton);

 expect(firstNameInput).toHaveValue("Bipin");
 expect(lastNameInput).toHaveValue("Shrestha");
 expect(addressInput).toHaveValue("California");
 expect(screen.getByTestId("successMessage")).toBeInTheDocument();


});
