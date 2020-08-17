import React from 'react'
import { render, screen, fireEvent, waitFor, act } from '@testing-library/react'
import ShoppingCart from '../components/ShoppingCart'

// Write up the two tests here and make sure they are testing what the title shows
const plants = [
  {
    name: 'Peperomia Rosso',
    id: 143,
    scientificName: 'Peperomia caperata rosso',
    difficulty: 'easy',
    light: 'direct',
    img:
      'https://cdn.shopify.com/s/files/1/2781/9558/products/PEPEROMIA_ROSSO-1_800x.png?v=1587156590',
    sizes: ['small'],
    watering: 2,
    description:
      'Rosalia is a stunner with glossy green leaves accompanied by bright red undersides. Her oval shaped leaves are deeply grooved, adding depth to her figure. Flower spikes will appear with bright light, adding even more character to this absolute beaut.',
    price: 21,
  },
]

describe('Shopping Cart', () => {
  test('Shopping Cart Page renders withour Crashing', () => {
    render(<ShoppingCart />)
  })

  it('test if we have item in the cart', () => {
    const { getByTestId } = render(<ShoppingCart cart={plants} />)

    expect(getByTestId('plantName')).toBeVisible()
  })
})

test('displays plants Peperomia Rosso in cart', () => {
  const { getByText } = render(<ShoppingCart cart={plants} />)

  expect(getByText('Peperomia Rosso')).toHaveTextContent('Peperomia Rosso')
})
