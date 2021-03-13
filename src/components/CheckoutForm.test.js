import React from "react";
import { screen, render } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", async () => {
  render(<CheckoutForm/>);
  document.getElementsByTagName('h2').value = 'Checkout Form';
  //get form header check#2
  screen.getByText(/Checkout Form/i);
  const header = screen.getByRole('heading')
  //get form header check#3
  expect(header).toBeInTheDocument();
});
  
test("form shows success message on submit with form details", () => {
    //Arrange: Setup our component
    render(<CheckoutForm/>,);
    const firstName = 'Tarah';
    const lastName = 'Agbokhana';
    const address = '1600 Pennsylvania Avenue';
    const city = 'Washington';
    const state = 'District of Columbia';
    const zip = '11111';
    //Act:
    const fNameInput = screen.getByLabelText('First Name:');
    userEvent.type(fNameInput, firstName);
    const lNameInput = screen.getByLabelText('Last Name:');
    userEvent.type(lNameInput, lastName);
    const addressInput = screen.getByLabelText('Address:');
    userEvent.type(addressInput, address);
    const cityInput = screen.getByLabelText('City:');
    userEvent.type(cityInput, city);
    const stateInput = screen.getByLabelText('State:');
    userEvent.type(stateInput, state);
    const zipInput = screen.getByLabelText('Zip:');
    userEvent.type(zipInput, zip);
    
   
    //-find and click submit button
    const buttonSubmit = document.getElementById('submit');
    expect(buttonSubmit).not.toBeDisabled();
    userEvent.click(buttonSubmit);
   
   //-renders all fields fext when all fields are submitted
  const successMsg = screen.queryByTestId('successMessage');
  expect(successMsg).toBeInTheDocument();
  //  screen.getAllByText('You have ordered some plants! Woo-hoo! 🎉 Your new green friends will be shipped to:')
   
});
