import React from "react";
import { render, fireEvent } from "@testing-library/react";
import CheckoutForm from "../components/CheckoutForm";
 

 //Write up the two tests here and make sure they are testing what the title shows
 test('form header renders', () => {
	const { getByText } = render(<CheckoutForm />);
	getByText(/checkout form/i);
});


test("form shows success message on submit with form details", () => {});	test('form shows success message on submit with form details', () => {
	const { getByLabelText, findAllByText, getByTestId } = render(<CheckoutForm />);

	fireEvent.change(getByLabelText(/first name/i), {target: { value: 'dessa' }});
	fireEvent.change(getByLabelText(/last name/i), {target: { value: 'goodlett' }});
	fireEvent.change(getByLabelText(/address/i), {target: { value: 'jiffy ln' }});
	fireEvent.change(getByLabelText(/city/i), {target: { value: 'hopkinsville' }});
	fireEvent.change(getByLabelText(/state/i), {target: { value: 'KY' }});
	fireEvent.change(getByLabelText(/zip/i), { target: { value: '12345' } });

	const checkoutButton = getByTestId('checkoutButton');
	fireEvent.click(checkoutButton);

	findAllByText(/dessa/i);

	expect(getByTestId('successMessage')).toBeInTheDocument();
});
