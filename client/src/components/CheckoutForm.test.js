import React from "react";
import { render, getByText, fireEvent, getByLabelText } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    const { getByText } = render(<CheckoutForm />);
    const container = getByText(/checkout form/i);
    expect(container).toBeVisible();
});

test("form shows success message on submit with form details", () => {
    const { getByTestId, getByLabelText, findAllByText } = render(<CheckoutForm />);

    const firstNameInput = getByLabelText(/first name/i);
    const lastNameInput = getByLabelText(/last name/i);
    const addressInput = getByLabelText(/address/i);
    const cityInput = getByLabelText(/city/i);
    const stateInput = getByLabelText(/state/i);
    const zipInput = getByLabelText(/zip/i);

    fireEvent.change(firstNameInput, { target: {value:"Keng"}});
    fireEvent.change(lastNameInput, { target: {value:"Thao"}});
    fireEvent.change(addressInput, { target: {value:"999 Folks St."}});
    fireEvent.change(cityInput, { target: {value:"San Diego"}});
    fireEvent.change(stateInput, { target: {value:"CA"}});
    fireEvent.change(zipInput, { target: {value:"99999"}});

    const checkOutButton = getByTestId("checkOutButton");
    fireEvent.click(checkOutButton);
    
    findAllByText(/Keng/i);

    expect(getByTestId("successMessage")).toBeVisible();
    
});
