import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    render(<CheckoutForm />)

    const inputFirstName =  screen.getByLabelText(/first name:/i)
    const inputLastName =  screen.getByLabelText(/last name:/i)
    const inputAddress =  screen.getByLabelText(/address:/i)
    const inputCity =  screen.getByLabelText(/city:/i)
    const inputState =  screen.getByLabelText(/state:/i)
    const inputZip =  screen.getByLabelText(/zip:/i)

    fireEvent.change(inputFirstName,{target:{ value:"Ava", name:"firstName"}})
    fireEvent.change(inputLastName,{target:{ value:"Murad", name:"lastName"}})
    fireEvent.change(inputAddress,{target:{ value:"516 E 80th st", name:"address"}})
    fireEvent.change(inputCity,{target:{ value:"New York", name:"city"}})
    fireEvent.change(inputState,{target:{ value:"NY", name:"state"}})
    fireEvent.change(inputZip,{target:{ value:"10075", name:"zip"}})

    expect(inputFirstName).toHaveValue('Ava')
    expect(inputLastName).toHaveValue('Murad')
    expect(inputAddress).toHaveValue('516 E 80th st')
    expect(inputCity).toHaveValue('New York')
    expect(inputState).toHaveValue('NY')
    expect(inputZip).toHaveValue('10075')

    // const submit = screen.getByRole('button')

    // fireEvent.click(submit)



});
