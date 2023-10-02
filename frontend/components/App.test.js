import React from 'react'
import {render, screen, fireEvent} from "@testing-library/react"
import '@testing-library/jest-dom/extend-expect';
import userEvent from '@testing-library/user-event'
import AppFunctional from './AppFunctional'

// Write your tests here
const updateStatelessSelectors = document => {
  up = document.querySelector('#up')
  down = document.querySelector('#down')
  left = document.querySelector('#left')
  right = document.querySelector('#right')
  reset = document.querySelector('#reset')
  submit = document.querySelector('#submit')
}


const updateStatefulSelectors = document => {
  squares = document.querySelectorAll('.square')
  coordinates = document.querySelector('#coordinates')
  steps = document.querySelector('#steps')
  message = document.querySelector('#message')
  email = document.querySelector('#email')
}

test('sanity', () => {
render (<AppFunctional />)
})

test('Coordinates to be in documents' ,() => {
  render ( <AppFunctional/> )
  const h3 = screen.findAllByTestId('coordinates')
  expect(h3).toHaveTextContent(/2,2/i)
})

test('Check text content',  () => {
  render (<AppFunctional />)
expect(up).toHaveTextContent(/UP/i)
})

test('Check to see submit button is in document', () => {
  render (<AppFunctional />)
  expect(submit).toBeInTheDocument()
})

test('Check to see if the reset button works', async () => {
  fireEvent.click(reset)
  expect(coordinates.textContent).toMatch(/\(2.*2\)$/)
})
