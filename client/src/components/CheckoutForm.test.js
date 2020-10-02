import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {});
 render(<CheckoutForm/>)
test("form shows success message on submit with form details", () => {});
//arrange
render(<CheckoutForm/>)
//act
const nameInput = screen.findByLabelText(/First Name:/)
const lastInput = screen.findByLabelText(/last Name:/)
const addressInput = screen.findByLabelText(/address/)
const cityInput = screen.findByLabelText(/city/)
const stateInput = screen.findByLabelText(/state/)
const zipInput = screen.findByLabelText(/zip/)

fireEvent.change(nameInput, {target:{name:'firstname', value:'tyler'}});
fireEvent.change(lastInput, {target:{name:'lastname', value:'maynard'}});
fireEvent.change(addressInput, {target:{name:'address', value:'123 central avenue'}});
fireEvent.change(cityInput, {target:{name:'city', value:'hattiesburg'}});
fireEvent.change(stateInput, {target:{name:'state', value:'mississippi'}});
fireEvent.change(zipInput, {target:{name:'zip', value:'39401'}});
//assert
const newname = screen.findByText(/tyler/i);
expect(newname).tobetruthy();