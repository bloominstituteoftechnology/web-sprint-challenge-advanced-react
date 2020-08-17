import React from "react";
import { render, getByText, fireEvent,screen } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import App from "../App";


// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
   const {getByText}=render(<CheckoutForm/>)
   const formHeader=getByText('Checkout Form')
   expect(formHeader).toBeInTheDocument()

});

test("form shows success message on submit with form details", () => {
    const {container}=render(<CheckoutForm/>)
    const firstName=container.querySelector('input[name="firstName"]')
    const lastName=container.querySelector('input[name="lastName"]')
    const address=container.querySelector('input[name="address"]')
    const city=container.querySelector('input[name="city"]')
    const state=container.querySelector('input[name="state"]')
    const zip=container.querySelector('input[name="zip"]')

    fireEvent.change(firstName,{
        target:{
            value:"Nandy"
        }
    })
    fireEvent.change(lastName,{
        target:{
            value:"Madan"
        }
    })
    fireEvent.change(address,{
        target:{
            value:"1234SA"
        }
    })
    fireEvent.change(city,{
        target:{
            value:"Monroe"
        }
    })
    fireEvent.change(state,{
        target:{
            value:"Wa"
        }
    })
    fireEvent.change(zip,{
        target:{
            value:"1234"
        }
    })

  //  const {getBytestId}=render(<CheckoutForm/>)



 //   const successMessage=container.getElementsByClassName('success-message')

    

});



