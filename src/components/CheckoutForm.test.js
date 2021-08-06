import React from "react";
import { render, screen } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import userEvent from "@testing-library/user-event";

// Write up the two tests here and make sure they are testing what the title shows

test("1 form header renders", () => {
    //arrange set up component CheckoutForm to test import screen too
    render (<CheckoutForm />);
    //act - get header by matching text of h1
    const header = screen.queryByText(/Checkout Form/i);
    //assert - expect it in the DOM and perhaps truthy
    console.log(header);
    expect(header).toBeInTheDocument();//can use either
    expect(header).toBeVisible();//can use any of these
    expect(header).toHaveTextContent(/Checkout Form/i);
    expect(header).toBeTruthy();
    expect(header).not.toBeFalsy();
    //another example to just have plenty of options
    const h2 = screen.queryByTestId('testh2');
    expect(h2).toBeInTheDocument();//can also tag with an id and use any of these 
    });
    

    test("2 form shows success message on submit with form details", () => {
        render (<CheckoutForm/>);
         //Arranged need good first, last, address, city, state, zip, scan for each field
        const firstName = 'William';
        const lastName = 'Mansfield';
        const address = 'PO Box 1434';
        const city = 'Grafton';
        const state = 'Wisconsin';
        const zip = '53024';
    
        const firstNameInput = screen.getByLabelText(/first name/i);
        const lastNameInput = screen.getByLabelText(/last name/i);
        const addressInput = screen.getByLabelText(/address/i);
        const cityInput = screen.getByLabelText(/city/i);
        const stateInput = screen.getByLabelText(/state/i);
        const zipInput = screen.getByLabelText(/zip/i);
    
        //ACT I - user enters each as arranged above 
        userEvent.type(firstNameInput, firstName);
        userEvent.type(lastNameInput, lastName);
        userEvent.type(addressInput, address);
        userEvent.type(cityInput, city);
        userEvent.type(stateInput, state);
        userEvent.type(zipInput, zip);
        //Assert "so far"
        expect(screen.queryByTestId('successMessage')).toBeFalsy();
        //ACT II user now uses submit button
        const button = screen.getByRole('button');//must be clicked "before" testing the for the message
        userEvent.click(button);
    
        //Assertions
        //MVP 
        const successMessage = screen.getByTestId('successMessage');
        expect(successMessage).toBeInTheDocument();
        expect(successMessage).toBeTruthy();
    
        //Notes to self...in real world testing seems like we might test for other items returned
        const checkoutName = screen.queryByText(/William Mansfield/i);
        expect(checkoutName).toBeInTheDocument();
        const checkoutAddress = screen.queryByText(/PO Box 1434/i);
        expect(checkoutAddress).toBeInTheDocument();
        const checkoutCityStateZip = screen.queryByText(/Grafton, Wisconsin 53024/i);
        expect(checkoutCityStateZip).toBeInTheDocument();
    
    });
