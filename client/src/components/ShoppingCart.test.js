import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import ShoppingCart from "./ShoppingCart";

const plants = [{description: "Rosalia is a stunner with glossy green leaves accompanied by bright red undersides. Her oval shaped leaves are deeply grooved, adding depth to her figure. Flower spikes will appear with bright light, adding even more character to this absolute beaut.",
difficulty: "easy",
id: 143,
img: "https://cdn.shopify.com/s/files/1/2781/9558/products/PEPEROMIA_ROSSO-1_800x.png?v=1587156590",
light: "direct",
name: "Peperomia Rosso",
price: 21,
scientificName: "Peperomia caperata rosso",
sizes: ["small"],
watering: 2}] 
test("displays plants in cart", () => {
  const { getByText } = render(<ShoppingCart cart={plants} />)
  const name = getByText(/Peperomia Rosso/i);
    expect(name).toBeInTheDocument();
})