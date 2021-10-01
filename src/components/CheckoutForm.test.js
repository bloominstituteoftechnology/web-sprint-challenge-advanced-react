import React from "react"
import MutationObserver from "mutationobserver-shim"
import { render } from "@testing-library/react"
import CheckoutForm from "./CheckoutForm"
import userEvent from "@testing-library/user-event"

// Write up the two tests here and make sure they are testing what the title shows

test("renders without errors", () => {
  render(<CheckoutForm />)
})

test("shows success message on submit with form details", () => {
  //focus submit
  render(<CheckoutForm />)

  const firstNameInput = screen.getByLabelText(/first name:/i)
  userEvent.type(firstNameInput, "test value first name")

  const lastName = screen.getByLabelText(/last name:/i)
  userEvent.type(lastName, "Nelson")

  const address = screen.getByLabelText(/address:/i)
  userEvent.type(address, "Nelson")

  const city = screen.getByLabelText(/city:/i)
  userEvent.type(city, "Nelson")

  const state = screen.getByLabelText(/state:/i)
  userEvent.type(state, "Nelson")

  const zip = screen.getByLabelText(/zip:/i)
  userEvent.type(zip, "Nelson")

  const button = screen.getByRole("button")
  userEvent.click(button)

  expect(screen.getByTestId("successMessage")).toBeInTheDocument()
})
