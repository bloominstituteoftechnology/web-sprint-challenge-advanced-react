import React from 'react';
import { render, screen, fireEvent} from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";
import AppFunctional from './AppFunctional';

test('renders initial coordinates and steps', () => {
  render(<AppFunctional />);
  console.log('AppFunctional')
  // expect(screen.getByText("Coordinates(2, 2)")).toBeInTheDocument();
  expect(screen.getByText("You moved 0 times")).toBeInTheDocument();
});

test("resets the state", () => {
  render(<AppFunctional />);
  fireEvent.click(screen.getByText("LEFT"));
  fireEvent.click(screen.getByText("reset"));
  expect(screen.getByText(/You moved 0 times/)).toBeInTheDocument(); // Use toBeInTheDocument()
});

// test('moves correctly and updates coordinates and steps', () => {
//   render(<AppFunctional />);
  
//   fireEvent.click(screen.getByText('LEFT'));
//   expect(screen.getByText(/You moved 1 time/)).toBeInTheDocument();
//   expect(screen.getByText(/Coordinates \(1, 2\)/)).toBeInTheDocument();

//   fireEvent.click(screen.getByText('UP'));
//   expect(screen.getByText(/You moved 2 times/)).toBeInTheDocument();
//   expect(screen.getByText(/Coordinates \(1, 1\)/)).toBeInTheDocument();

//   fireEvent.click(screen.getByText('RIGHT'));
//   expect(screen.getByText(/You moved 3 times/)).toBeInTheDocument();
//   expect(screen.getByText(/Coordinates \(2, 1\)/)).toBeInTheDocument();

//   fireEvent.click(screen.getByText('DOWN'));
//   expect(screen.getByText(/You moved 4 times/)).toBeInTheDocument();
//   expect(screen.getByText(/Coordinates \(2, 2\)/)).toBeInTheDocument();
// });
test('sanity', () => {
  expect(true).toBe(true)
})
