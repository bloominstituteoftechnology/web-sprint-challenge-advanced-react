import React from "react";
import MutationObserver from 'mutationobserver-shim';
import { render, screen } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import userEvent from "@testing-library/user-event";

// Write up the two tests here and make sure they are testing what the title shows

test("renders without errors", () => {
    render(<CheckoutForm/>)
    
});
    

test("shows success message on submit with form details", () => {
    render(<CheckoutForm/>)
    // grabbing elements 
    
    const firstInput = screen.getByLabelText('First Name:');
    const lastInput = screen.getByLabelText('Last Name:');
    const addressInput = screen.getByLabelText('Address:');
    const cityInput = screen.getByLabelText('City:');
    const stateInput = screen.getByLabelText('State:');
    const zipInput = screen.getByLabelText('Zip:');
    const submit = screen.getByRole('button');

    // typing into inputs
    userEvent.type(firstInput, 'testfirst');
    userEvent.type(lastInput, 'testlast');
    userEvent.type(addressInput, 'testadd');
    userEvent.type(cityInput, 'testcity');
    userEvent.type(stateInput, 'teststate');
    userEvent.type(zipInput, 'testzip');
    userEvent.click(submit);

    // grabbing exact form response
    const succage = screen.getByText(/You have ordered some plants!/);
    const nameOut = screen.getByText(/testfirst/);
    const addressOut = screen.getByText('testadd')
    const cityOut = screen.getByText(/testcity/)
    const zipOut = screen.getByText(/testzip/)
    
    
    // expect form to have exact changes
    expect(succage).toBeInTheDocument()
     expect(nameOut).toBeInTheDocument('testfirs')
     expect(addressOut).toBeInTheDocument('testadd')
     expect(cityOut).toBeInTheDocument('testcity')
     expect(zipOut).toBeInTheDocument('testzip')
    
});
