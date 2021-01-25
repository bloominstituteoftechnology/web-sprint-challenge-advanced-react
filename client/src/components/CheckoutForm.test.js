import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

// Test case to find the DOM node by a text, which need to be in the document
test("form header renders", () => {
  render(<CheckoutForm />);
  const formHeader = screen.getByText(/checkout form/i);
  //screen.debug(formHeader);
  expect(formHeader).toBeInTheDocument();
});

//Test case that get the button node
// and changes all fields with sample test data
// clicks the selected dom node (button)
// and expects to have the ShowSuccessMessage div 
// as well as sample zip data to be in that div

test("form shows success message on submit with form details", () => {
  render(<CheckoutForm />);

  const formButton = screen.getByRole("button");

  const firstName = screen.getByLabelText(/First Name:/i);
  const lastName = screen.getByLabelText(/Last Name:/i);
  const address = screen.getByLabelText(/Address:/i);
  const city = screen.getByLabelText(/City:/i);
  const state = screen.getByLabelText(/State:/i);
  const zip = screen.getByLabelText(/Zip:/i);

  fireEvent.change(firstName, {target: {value:"Testname"}});
  fireEvent.change(lastName, {target: {value:"Testname"}});
  fireEvent.change(address, {target: {value:"Test"}});
  fireEvent.change(city, {target: {value:"Test"}});
  fireEvent.change(state, {target: {value:"Test"}});
  fireEvent.change(zip, {target: {value:"10001"}});

  fireEvent.click(formButton);

  expect(screen.getByTestId("successMessage")).toBeVisible();
  expect(screen.getByText(/10001/i)).toBeInTheDocument();
});
