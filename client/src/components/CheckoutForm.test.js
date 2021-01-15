import React from "react";
import { render } from "@testing-library/react";
import user from "@testing-library/user-event"
import CheckoutForm from "./CheckoutForm";
import userEvent from "@testing-library/user-event";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
  const { getByLabelText } = render(<CheckoutForm />)
  expect(getByLabelText("header")).toBeInTheDocument()
});

test("form shows success message on submit with form details", () => {
  const { getByLabelText, getByRole } = render(<CheckoutForm />);

  expect(getByLabelText("firstName")).toBeInTheDocument();
  expect(getByLabelText("lastName")).toBeInTheDocument();
  expect(getByLabelText("address")).toBeInTheDocument();
  expect(getByLabelText("city")).toBeInTheDocument();
  expect(getByLabelText("state")).toBeInTheDocument();
  expect(getByLabelText("zip")).toBeInTheDocument();
  expect(getByRole("button")).toBeInTheDocument();

  // userEvent.type(firstNameInput, "first name")
  // userEvent.type(lastNameInput, "last name")
  // userEvent.type(addressInput, "address")
  // userEvent.type(cityInput, "city")
  // userEvent.type(stateInput, "state")
  // userEvent.type(zipInput, "zip")
  
  // expect(newFirstName).toBe("first name");
  // expect(newLastName).toBe("last name");
  // expect(newAddress).toBe("address");
  // expect(newCity).toBe("city");
  // expect(newState).toBe("state");
  // expect(newZip).toBe("zip");

  // const firstNameInput = screen.getByTestId(/firstName/i)
  // const lastNameInput = screen.getByTestId(/lastName/i)
  // const addressInput = screen.getByTestId(/address/i)
  // const cityInput = screen.getByTestId(/city/i)
  // const stateInput = screen.getByTestId(/state/i)
  // const zipInput = screen.getByTestId(/zip/i)
  
  // const submitButton = screen.getByRole('button')


  
  

  // userEvent.click(button)

  // const newFirstName = screen.findByText("first name")
  // const newLastName = screen.findByText("last name")
  // const newAddress = screen.findByText("address")
  // const newCity = screen.findByText("city")
  // const newState = screen.findByText("state")
  // const newZip = screen.findByText("zip")

  // expect(newFirstName).toBeInTheDocument();
  // expect(newLastName).toBeInTheDocument();
  // expect(newAddress).toBeInTheDocument();
  // expect(newCity).toBeInTheDocument();
  // expect(newState).toBeInTheDocument();
  // expect(newZip).toBeInTheDocument();

});
