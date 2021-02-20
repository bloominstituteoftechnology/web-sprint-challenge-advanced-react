import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ShoppingCart from "./ShoppingCart";

const plants = [
{
  name: "Peperomia Rosso",
  id: 143,
  scientificName: "Peperomia caperata rosso",
  difficulty: "easy",
  light: "direct",
  img:
    "https://cdn.shopify.com/s/files/1/2781/9558/products/PEPEROMIA_ROSSO-1_800x.png?v=1587156590",
  sizes: ["small"],
  watering: 2,
  description:
    "Rosalia is a stunner with glossy green leaves accompanied by bright red undersides. Her oval shaped leaves are deeply grooved, adding depth to her figure. Flower spikes will appear with bright light, adding even more character to this absolute beaut.",
  price: 21,
},
{
  name: "Fluffy Muffy",
  id: 144,
  scientificName: "flufficus mufficus",
  difficulty: "medium",
  light: "indirect",
  img:
    "https://cdn.shopify.com/s/files/1/2781/9558/products/PEPEROMIA_ROSSO-1_800x.png?v=1587156590",
  sizes: ["medium"],
  watering: 2,
  description:
    "Likes low light.  Grows pink leaves in winter with a fluffy white flower.",
  price: 20,
},
{
  name: "Monstera",
  id: 145,
  scientificName: "Monstera tropicalis",
  difficulty: "easy",
  light: "direct",
  img:
    "https://cdn.shopify.com/s/files/1/2781/9558/products/PEPEROMIA_ROSSO-1_800x.png?v=1587156590",
  sizes: ["slargel"],
  watering: 2,
  description:
    "Will bring the tropics to any home.  Large leaves, green and glossy.",
  price: 19,
}
] // with each object being a mock plant



test("displays plants in cart", () => {
  render(<ShoppingCart cart={plants} />)

  const peperomia = screen.getByText(/Peperomia/i);
  const fluffy = screen.getByText(/Fluffy/i);
  const monstera = screen.getByText(/Monstera/i);

  expect(peperomia).toBeTruthy();
  expect(peperomia).toBeInTheDocument();
  expect(peperomia).toBeVisible();

  expect(fluffy).toBeTruthy();
  expect(fluffy).toBeInTheDocument();
  expect(fluffy).toBeVisible();

  expect(monstera).toBeTruthy();
  expect(monstera).toBeInTheDocument();
  expect(monstera).toBeVisible();

})