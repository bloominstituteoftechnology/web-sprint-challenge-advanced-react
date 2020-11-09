import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders App without crashing", () => {
  render(<App />);
});


test('render App without errors', () =>{
  render(<App />);
  const header = screen.getByText(/React Plants/i);
  console.log(header);


  // Add in npm test to start test
  expect(header).toBeInTheDocument();
  expect(header).toBeTruthy();
  expect(header).toHaveTextContent(/React Plants/i);
  expect(header).not.toHaveTextContent(/Fee fi fo fump/i);
  expect(header).not.toBeFalsy(); 

})