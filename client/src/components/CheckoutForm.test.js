import React from "react";
import { render } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import PlantList from "./PlantList";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
  //arrange
  const { getByText } = render(<PlantList />);
  // Act
  getByText(/Plant-list/i);
});

test("form shows success message on submit with form details", () => {});
