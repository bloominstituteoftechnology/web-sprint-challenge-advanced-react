import React from 'react'
import { fireEvent, render, screen } from "@testing-library/react";
import ShoppingCart from './ShoppingCart'

const testPlantsData = [
  {
    name: "ZZ Plant",
    id: 48563,
    scientificName: "Zamioculcas zamiifolia",
    difficulty: "easy",
    light: "direct",
    img: "https://cdn.shopify.com/s/files/1/2781/9558/products/6__ZZ-1_800x.png?v=1587411408",
    sizes: [
      "small",
      "medium"
    ],
    watering: 2,
    description: "He's able to go without water for weeks on end and can survive in almost any light condition. As wildly successful as he is, he stays true to his roots and can often be seen basking in the streets of Brooklyn reminiscing about the good ole' days over at Plant-A-Fella Records.",
    price: 18
  },
  {
    name: "Jade Plant",
    id: 498697,
    scientificName: "Crassula ovata",
    difficulty: "easy",
    light: "direct",
    img: "https://cdn.shopify.com/s/files/1/2781/9558/products/SUCCULENT_JADE-1_800x.png?v=1587153094",
    sizes: [
      "small"
    ],
    watering: 2,
    description: "Originally from South Africa, Jade loves sun-drenched beaches, the occasional surf, and sandy soils. Too much water too often doesn't sit well with her, so maybe offer her a beer? (Please don't give your plants beer).",
    price: 15
  },
  {
    name: "Rabbit Foot Fern",
    id: 967391,
    scientificName: "Davallia fejeensis",
    difficulty: "medium",
    light: "indirect",
    img: "https://cdn.shopify.com/s/files/1/2781/9558/products/FERN_RABBITSFOOT-1_800x.png?v=1587152433",
    sizes: [
      "small"
    ],
    watering: 4,
    description: "Fortuna is a beautiful, resilient fern with furry rhizomes that resemble that of a rabbit’s foot. If luck hasn't been on your side when raising plants, Fortuna may be the one to finally break that streak.",
    price: 22
  },
  {
    name: "Peace Lily",
    id: 2358,
    scientificName: "Spathiphyllum wallisii",
    difficulty: "medium",
    light: "low",
    img: "https://cdn.shopify.com/s/files/1/2781/9558/products/6__SPATH_PEACELILY-1_800x.png?v=1587653193",
    sizes: [
      "small",
      "medium"
    ],
    watering: 6,
    description: "Don't let the 'peace' part fool you—she's here to grab your attention by the horns with her lush leaves, pearly white blooms, and air filtering prowess. She might need more attention than others, but like they say, nothing good comes easy.",
    price: 26
  },
];

test('Shopping Cart Renders', () => {
  render(<ShoppingCart cart={[]} />)
});

test('plants Rendereds', () => {
  render(<ShoppingCart cart={testPlantsData} />)

  expect(screen.getByText(/ZZ Plant/i)).toBeInTheDocument();
  expect(screen.getByText(/Jade Plant/i)).toBeInTheDocument();
  expect(screen.getByText(/Rabbit Foot Fern/i)).toBeInTheDocument();
  expect(screen.getByText(/Peace Lily/i)).toBeInTheDocument();
  expect(screen.queryByText(/steak/i)).not.toBeInTheDocument();
})