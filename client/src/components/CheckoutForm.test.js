import React from "react";
import { render, fireEvent } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import { act } from "react-dom/test-utils";
// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    const { getByText } = render(<CheckoutForm />)
    const formHeader = getByText("Checkout Form")
    expect(formHeader).toBeInTheDocument()
});

test("form shows success message on submit with form details", async () => {
    const { getByText,getByRole,getByTestId } = render(<CheckoutForm />)
    const submit = getByRole("button")
    const firstName = getByTestId("firstName")
    const lastName = getByTestId("lastName")
    const address = getByTestId("address")
    const city = getByTestId("city")
    const state = getByTestId("state")
    const zip = getByTestId("zip")
    await act(async () => {
    fireEvent.change(firstName, {target:{value:"Daniel"}})
    }),
    await act(async () => {
    fireEvent.change(lastName, {target:{value:"Terry"}})
    }),
    await act(async () => {
    fireEvent.change(address, {target:{value:"123"}})
    }),
    await act(async () => {
    fireEvent.change(city, {target:{value:"dallas"}})
    }),
    await act(async () => {
    fireEvent.change(state, {target:{value:"tx"}})
    }),
    await act(async () => {
    fireEvent.change(zip, {target:{value:"30145"}})
    fireEvent.click(submit)
    })
    const successMessage = getByText("You have ordered some plants! Woo-hoo!")
    const userName = getByText("Daniel Terry")
expect(successMessage).toBeInTheDocument()
expect(zip).toHaveValue("30145")
expect(firstName).toHaveValue("Daniel")
expect(userName).toBeInTheDocument()
})