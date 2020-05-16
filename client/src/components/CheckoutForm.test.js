import React from "react";
import { render, fireEvent } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
  render(<CheckoutForm />);
});

test("form shows success message on submit with form details", async () => {
  const { getByTestId, getByRole } = render(<CheckoutForm />);
  const firstName = getByTestId("firstName");
  const lastName = getByTestId("lastName");
  const address = getByTestId("address");
  const city = getByTestId("city");
  const state = getByTestId("state");
  const zip = getByTestId("zip");
  const submitBtn = getByRole("button", { name: /checkout/i });

  fireEvent.change(firstName, { target: { value: "Ryan" } });
  expect(firstName.value).toBe("Ryan");

  fireEvent.change(lastName, { target: { value: "Paulson" } });
  expect(lastName.value).toBe("Paulson");

  fireEvent.change(address, { target: { value: "7808 W Waterford" } });
  expect(address.value).toBe("7808 W Waterford");

  fireEvent.change(city, { target: { value: "Sioux Falls" } });
  expect(city.value).toBe("Sioux Falls");

  fireEvent.change(state, { target: { value: "SD" } });
  expect(state.value).toBe("SD");

  fireEvent.change(zip, { target: { value: "57106" } });
  expect(zip.value).toBe("57106");

  submitBtn.click();
  const message = getByTestId("successMessage");
  await expect(message.textContent).toContain("57106");
});
