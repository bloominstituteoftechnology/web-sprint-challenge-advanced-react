import React from "react";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import MutationObserver from 'mutationobserver-shim';

import CheckoutForm from "./components/CheckoutForm";
import PlantList from "./components/PlantList";

describe("Checkout Form tests", ()=>{
  test("renders without errors", ()=>{
    render(<CheckoutForm />);
  });

  test("form submits correctly", async () => {
    render(<CheckoutForm />);
  
    fireEvent.change(screen.getByLabelText(/first name:/i), {
      target: { value: "test value first name" },
    });
    fireEvent.change(screen.getByLabelText(/last name/i), {
      target: { value: "test value last name" },
    });
    fireEvent.change(screen.getByLabelText(/address/i), {
      target: { value: "test value address" },
    });
    fireEvent.change(screen.getByLabelText(/city/i), {
      target: { value: "test value city" },
    });
    fireEvent.change(screen.getByLabelText(/state/i), {
      target: { value: "test value state" },
    });
    fireEvent.change(screen.getByLabelText(/zip/i), {
      target: { value: "test value zip" },
    });
  
    fireEvent.click(screen.getByRole("button", { name: /checkout/i }));
  
    expect(screen.getByTestId("successMessage")).toBeInTheDocument();
  });
  
  test("Fetches the list of plants", async () => {
    render(<PlantList addToCart={jest.fn()} />);
  
    await waitFor(() => screen.getAllByTestId("plant-card"));
  
    expect(screen.getAllByTestId("plant-card")).toHaveLength(8);
  });
});

describe("Plant List tests", ()=>{
  test("renders without errors", ()=>{
    render(<PlantList />);
  });

  test("Calls addToCart function when add button is clicked", async () => {
    const addToCart = jest.fn();
    render(<PlantList addToCart={addToCart} />);
  
    await waitFor(() => screen.getAllByTestId("plant-card"));
  
    fireEvent.click(screen.getAllByRole("button", { name: /Add to cart/i })[0]);
  
    expect(addToCart).toHaveBeenCalled();
  });
    
});