import React from "react";
import { fireEvent, render,screen } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    render(<CheckoutForm/>)
    const header= screen.getByText(/checkout form/i);

});

test("form shows success message on submit with form details", async() => {
    render(<CheckoutForm/>)
// arrange 
const firstName=screen.getByLabelText(/first name/i);
const lastName=screen.getByLabelText(/last name/i);
const address=screen.getByLabelText(/address/i);
const city=screen.getByLabelText(/city/i);
const state=screen.getByLabelText(/state/i);
const zip=screen.getByLabelText(/zip/i);
const button=screen.getByRole('button',{name:/checkout/i});
const message=()=>{return(
    <div className="success-message" data-testid="successMessage">
          <p>
            You have ordered some plants! Woo-hoo! <span role="img">🎉</span>
          </p>
          <p>Your new green friends will be shipped to:</p>
          <br />
          <br />
          <p>
            Terry Edwards
          </p>
          <p>3555 sedona</p>
          <p>
            Tally, FL 323
          </p>
        </div>
)}


// act
fireEvent.change(firstName,{tarrget:{value:'Terry'}});
fireEvent.change(lastName,{tarrget:{value:'Edwards'}});
fireEvent.change(address,{tarrget:{value:'3555 sedona'}});
fireEvent.change(city,{tarrget:{value:'Tally'}});
fireEvent.change(state,{tarrget:{value:'FL'}});
fireEvent.change(zip,{tarrget:{value:'323'}});
fireEvent.click(button)

// assert 
const success= await screen.findByTestId(/successMessage/i);
expect(success).toHaveTextContent('You have ordered some plants! Woo-hoo! 🎉Your new green friends will be shipped to: Terry Edwards 3555 sedona Tally, FL 323')

});

// Terry Edwards 3555 sedona Tally, FL 323
