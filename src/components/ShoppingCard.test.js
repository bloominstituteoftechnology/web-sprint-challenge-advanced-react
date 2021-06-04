import React from 'react';
import ShoppingCart from "./ShoppingCart";
import {
  render
} from '@testing-library/react';

const plants = [ {

    "scientificName": "Davallia fejeensis",
    "name": "Rabbit Foot Fern",
    "id": 967391,
    "img": "https://cdn.shopify.com/s/files/1/2781/9558/products/FERN_RABBITSFOOT-1_800x.png?v=1587152433",
    "difficulty": "medium",
    "light": "indirect",
    "sizes": [ "small" ],
    "watering": 4,
    "description": "Fortuna is a beautiful, resilient fern with furry rhizomes that resemble that of a rabbit’s foot. If luck hasn't been on your side when raising plants, Fortuna may be the one to finally break that streak.",
    "price": 22
  },

  {
    "scientificName": "Zamioculcas zamiifolia",
    "name": "ZZ Plant",
    "id": 48563,
    "img": "https://cdn.shopify.com/s/files/1/2781/9558/products/6__ZZ-1_800x.png?v=1587411408",
    "difficulty": "medium",
    "light": "direct",
    "sizes": [ "small" ],
    "watering": 4,
    "description": "He's able to go without water for weeks on end and can survive in almost any light condition. As wildly successful as he is, he stays true to his roots and can often be seen basking in the streets of Brooklyn reminiscing about the good ole' days over at Plant-A-Fella Records.",
    "price": 18
  },
  {
    "scientificName": "Spathiphyllum wallisii",
    "name": "Peace Lilly",
    "id": 2358,
    "img": "https://cdn.shopify.com/s/files/1/2781/9558/products/6__SPATH_PEACELILY-1_800x.png?v=1587653193",
    "difficulty": "medium",
    "light": "low",
    "sizes": [ "small", "medium" ],
    "watering": 6,
    "description": "Don't let the 'peace' part fool you—she's here to grab your attention by the horns with her lush leaves, pearly white blooms, and air filtering prowess. She might need more attention than others, but like they say, nothing good comes easy.",
    "price": 18
  }
];

test( "plants are displayed in the cart", () => {


      const wrapper = render( < ShoppingCart cart = {
          plants
        }
        />);

        const plantName = wrapper.getAllByTestId( "plantName" );

        expect( plantName[ 0 ].textContent ).toBe( "Rabbit Foot Fern" ); expect( plantName[ 1 ].textContent ).toBe( "ZZ Plant" ); expect( plantName[ 2 ].textContent ).toBe( "Peace Lilly" );

      } )
