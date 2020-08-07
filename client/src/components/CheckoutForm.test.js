import React from "react";
import { render, getByLabelText, fireEvent, queryAllByLabelText, getByTestId } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", async() => {
    const { getByText } = render(<CheckoutForm />);
    //isolate the h2 by text
    const header = getByText(/checkout form/i); 
    //expect it to be in the document 
    expect(header).toBeInTheDocument();
});

test("form shows success message on submit with form details", async() => {
    // grab rendered component 
    const { getByLabelText, getByRole, getByTestId } = render(<CheckoutForm />);
    
    // get the different inputs 

    const firstNameInput = getByLabelText(/first name/i); 
    await userEvent.type(firstNameInput, 'ashley');
    expect(firstNameInput).toHaveValue('ashley'); 

    const lastNameInput = getByLabelText(/last name/i); 
    await userEvent.type(lastNameInput, 'bergsma');
    expect(lastNameInput).toHaveValue('bergsma'); 

    const addressInput = getByLabelText(/address/i); 
    await userEvent.type(addressInput, '123 happy lane');
    expect(addressInput).toHaveValue('123 happy lane'); 

    const cityInput = getByLabelText(/city/i); 
    await userEvent.type(cityInput, 'phoenix');
    expect(cityInput).toHaveValue('phoenix');
    
    const stateInput = getByLabelText(/state/i); 
    await userEvent.type(stateInput, 'az');
    expect(stateInput).toHaveValue('az');
    
    const zipInput = getByLabelText(/zip/i); 
    await userEvent.type(zipInput, '550055');
    expect(zipInput).toHaveValue('550055'); 

    // grab the button 
    const checkoutBtn = getByRole("button", { name: /checkout/i}); 
    // click the button 
    await userEvent.click(checkoutBtn); 
    expect(await getByTestId("successMessage"));
});
