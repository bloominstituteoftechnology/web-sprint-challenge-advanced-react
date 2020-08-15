import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import CheckoutForm from './CheckoutForm'

// Write up the two tests here and make sure they are testing what the title shows

test('CheckOut Page renders withour Crashing', () => {
  render(<CheckoutForm />)
})

test('form header renders', () => {
  const { getByTestId } = render(<CheckoutForm />)

  expect(getByTestId('title').textContent).toBe('Checkout Form')
})

test('click checkout button', () => {
  const { getByTestId } = render(<CheckoutForm />)

  const button = getByTestId('checkoutButton')

  fireEvent.click(button)
  const success = getByTestId('successMessage')
  expect(success).toBeVisible()
})

// // test('form shows success message on submit with form details', async () => {
// const { getByText } = render(<CheckoutForm />)
// const firstName = getByText(/values.firstName/i)
// fireEvent.click(button)
// console
// // })
