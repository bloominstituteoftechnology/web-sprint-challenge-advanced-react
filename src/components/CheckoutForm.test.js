import React from "react";
import { render, waitFor, screen,} from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import userEvent from "@testing-library/user-event"

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {

render(<CheckoutForm/>)
    const header = screen.queryByText(/checkout form/i);
    expect(header).toBeInTheDocument()
});

test("form shows success message on submit with form details", () => {

render(<CheckoutForm/>);

const firstName = screen.getByLabelText(/first name:/i);
    userEvent.type(firstName, "Kendrick");
const lastName = screen.getByLabelText(/last name:/i);
    userEvent.type(lastName, "Lamar");
const address = screen.getByLabelText(/address:/i);
    userEvent.type(address, "2431 DND ln");
const city = screen.getByLabelText(/city:/i);
    userEvent.type(city, "MADD CITY");
const state = screen.getByLabelText(/state:/i);
    userEvent.type(state, "");
const zipcode = screen.getByLabelText(/zip:/i);
    userEvent.type(zipcode, "98047");
const btn = screen.getByRole("button");
    userEvent.click(btn);

const success = screen.getByTestId(/successMessage/i);
    expect(success).toBeInTheDocument();
});