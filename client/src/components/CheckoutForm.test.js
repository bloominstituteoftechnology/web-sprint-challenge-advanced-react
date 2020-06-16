import React from "react";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import PlantList from "./PlantList";
// add custom jest matchers from jest-dom
import "@testing-library/jest-dom/extend-expect";
// the component to test
// import Fetch from "../fetch";
// import { mount } from "enzyme";

// Write up the two tests here and make sure they are testing what the title shows
test("Test testing check", () => {
  expect(true).toBeTruthy();
});

test("form header renders", () => {
  //arrange
  //   const { getByText } = render(<PlantList />);
  const { getByTestId } = render(<PlantList />);
  // Act
  getByTestId(/plant-list/i);
  //   getByText(/Plant-list/i);
});

test("form shows success message on submit with form details", () => {
  const { getByTestId } = render(<CheckoutForm />);

  getByTestId(/successmessage/i);
});
