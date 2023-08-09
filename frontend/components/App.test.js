import React from 'react'
import AppFunctional from './AppFunctional'
import { render, fireEvent, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
// Write your tests here
test('sanity', () => {
  expect(true).toBe(true)
})


test('header renders', () => {
  render(<AppFunctional />)

  const coordinates = screen.queryByText(/coordinates/i)
  const upButton = screen.queryByText('UP')
  const leftButton = screen.queryByText('LEFT')
  const rightButton = screen.queryByText('RIGHT')
  const downButton = screen.queryByText('DOWN')
  const resetButton = screen.queryByText('reset')

  expect(coordinates).toBeInTheDocument()
  expect(leftButton).toBeInTheDocument()
  expect(rightButton).toBeInTheDocument()
  expect(upButton).toBeInTheDocument()
  expect(downButton).toBeInTheDocument()
  expect(resetButton).toBeInTheDocument()
})

test('typing in input results in text entered', () => {
  render(<AppFunctional />)

  const inputBox = screen.getByRole('textbox', {id:'email'})

  expect(inputBox)
    .toBeInTheDocument()
  fireEvent.change(inputBox, { target: {value: 'pizzatime'}})
  expect(inputBox)
    .toHaveValue('pizzatime')
})

test('clicking reset clears input box', () => {
  render(<AppFunctional />)

  const inputBox = screen.getByRole('textbox', {id:'email'})
  const resetButton = screen.getByTestId('reset')

  fireEvent.change(inputBox, { target: {value: 'pizzatime'}})
  expect(inputBox)
    .toHaveValue('pizzatime')
  fireEvent.click(resetButton)
  expect(inputBox)
    .toHaveValue('')
})

test('cannot go up past bounds', () => {
  render(<AppFunctional />)

  const upButton = screen.getByTestId('up')

  fireEvent.click(upButton)
  fireEvent.click(upButton)
  expect(screen.getByText("You can't go up")).toBeInTheDocument()
})

test('displays moves', () => {
  render(<AppFunctional />)

  const upButton = screen.getByTestId('up')

  fireEvent.click(upButton)
  expect(screen.getByText("You moved 1 time")).toBeInTheDocument()
})