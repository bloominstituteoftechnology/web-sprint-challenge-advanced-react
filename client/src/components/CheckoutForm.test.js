import React from "react";
import { render, fireEvent } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => { 
    render(<CheckoutForm />)
    expect(screen.getByText(/checkout form/i));
});

//Was able to force a failure by changing the checkoutform name 

test("form shows success message on submit with form details", () => {
    
    //He we have to render the Component 
    const { getByLableText, getByText } = render(<checkoutForm />);

    //Check to see if the Below has rendered

    const firstNameInput = screen.getByLableText(/first name/i);
    const lastNameInput = screen.getByLableText(/last name/i);
    const addressInput = screen.getByLableText(/address/i);
    const cityInput = screen.getByLableText(/city/i);
    const stateInput = screen.getByLableText(/state/i);
    const zipInput = screen.getByLableText(/zip/i);

    //Checkinig Submit Button 
    const submitButton = getByText('Checkout');
 //STEP 3: Fill out inputs
 fireEvent.change(firstNameInput, {target: { value: 'Mike' }});
 fireEvent.change(lastNameInput, {target: { value: 'Mitchell' }});
 fireEvent.change(addressInput, {target: { value: '21 sheffield dr' }});
 fireEvent.change(cityInput, {target: { value: 'Phildaldelphia' }});
 fireEvent.change(stateInput, {target: { value: 'pa' }});
    fireEvent.change(zipInput, { target: { value: '90210' } });
   
   //Submit Form by Fireing Submit Button 
    fireEvent.click(submitButton);
    
    // Add Assertions 
    expect(screen.getByText(/Mike/i))
    expect(screen.getByText(/Mitchell/i))
    expect(screen.getByText(/21 sheffield dr/i))
    expect(screen.getByText(/Philadelphia/i))
    expect(screen.getByText(/pa/i))
    expect(screen.getByText(/90210/i))
    //Verifies 'successMessage' has been rendered for a successful submision 
    expect(screen.getByTestID('successMessage'))

});
