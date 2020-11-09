import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders App without crashing", () => {
  render(<App />);
});


test('render App without errors', () =>{
  render(<App />);
  const headerTitle = screen.getByText(/React Plants/i);
//   console.log(headerTitle);


  // Add in npm test to start test
  expect(headerTitle).toBeInTheDocument();
  expect(headerTitle).toBeTruthy();
  expect(headerTitle).toHaveTextContent(/React Plants/i);
  expect(headerTitle).not.toHaveTextContent(/Fee fi fo fump/i);
  expect(headerTitle).not.toBeFalsy(); 

})