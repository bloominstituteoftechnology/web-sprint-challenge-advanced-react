import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => { render(<CheckoutForm />) });

test("success message on submit", async () => {
  render(<CheckoutForm />)

  // filling out the form
  fireEvent.change(screen.getByLabelText(/first name/i), {
    target: { value: 'Robel' },
  });
  fireEvent.change(screen.getByLabelText(/last name/i), {
    target: { value: 'Mengistu' },
  });
  fireEvent.change(screen.getByLabelText(/address/i), {
    target: { value: '1234 S Parker rd' },
  });
  fireEvent.change(screen.getByLabelText(/city/i), {
    target: { value: 'Denver' },
  });
  fireEvent.change(screen.getByLabelText(/state/i), {
    target: { value: 'Colorado' },
  });
  fireEvent.change(screen.getByLabelText(/zip/i), {
    target: { value: '20200' },
  });

  // submiting the form

  fireEvent.click(screen.getByTestId(/checkout/i));

  // is success message
  expect(screen.queryByTestId("successMessage")).toBeInTheDocument();

  // Form Fields
  const firstname = await screen.findByText(/Robel/i)
  const lastname = await screen.findByText(/Mengistu/i)
  const address = await screen.findByText(/1234 S Parker rd/i)
  const city = await screen.findByText(/Denver/i)
  const state = await screen.findByText(/Colorado/i)
  const zip = await screen.findByText(/20200/i)

  //  failing to show test works
  expect(firstname).toHaveTextContent(/Robel/i)
  expect(lastname).toHaveTextContent(/Mengistu/i)
  expect(address).toHaveTextContent(/1234 S Parker rd/i)
  expect(city).toHaveTextContent(/Denver/i)
  expect(state).toHaveTextContent(/Colorado/i)
  expect(zip).toHaveTextContent(/20200/i)

})


