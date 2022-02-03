import server from './backend/mock-server'
import React from 'react'
import AppFunctional from './frontend/components/AppFunctional'
import AppClass from './frontend/components/AppClass'
import { render, fireEvent, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

const queryOptions = { exact: false }
const waitForOptions = { timeout: 50 }
const jestTimeout = 750 // USE IN ALL TESTS!!!

let up, down, left, right, reset, submit
let squares, coordinates, steps, message, email

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

const testSquares = (squares, activeIdx) => {
  squares.forEach((square, idx) => {
    if (idx === activeIdx) {
      expect(square.textContent).toBe('B')
    } else {
      expect(square.textContent).toBeFalsy()
    }
  })
}

test('AppFunctional is a functional component', () => {
  expect(
    AppFunctional.prototype &&
    AppFunctional.prototype.isReactComponent
  ).not.toBeTruthy()
}, jestTimeout)
test('AppClass is a class-based component', () => {
  expect(
    AppClass.prototype &&
    AppClass.prototype.isReactComponent
  ).toBeTruthy()
}, jestTimeout);

[AppFunctional, AppClass].forEach((Component, idx) => {
  const label = idx === 0 ? 'FUNCTIONAL' : 'CLASS-BASED'

  describe(`${label}`, () => {
    beforeAll(() => { server.listen() })
    afterAll(() => { server.close() })
    beforeEach(() => {
      render(<Component />)
      updateStatelessSelectors(document)
      updateStatefulSelectors(document)
    })
    afterEach(() => {
      server.resetHandlers()
      document.body.innerHTML = ''
    })


    describe(`[A ${label}] Active Square`, () => {
      test(`[A1 ${label}] Actions: none (Initial State of <App />)
          Active Square should be index 4`, () => {
        testSquares(squares, 4)
      }, jestTimeout)
      test(`[A2 ${label}] Actions: up
          Active Square should be index 1`, () => {
        fireEvent.click(up)
        testSquares(squares, 1)
      }, jestTimeout)
      test(`[A3 ${label}] Actions: up, up
          Active Square should be index 1`, () => {
        fireEvent.click(up)
        fireEvent.click(up)
        testSquares(squares, 1)
      }, jestTimeout)
      test(`[A4 ${label}] Actions: up, left
          Active Square should be index 0`, () => {
        fireEvent.click(up)
        fireEvent.click(left)
        testSquares(squares, 0)
      }, jestTimeout)
      test(`[A5 ${label}] Actions: up, left, left
          Active Square should be index 0`, () => {
        fireEvent.click(up)
        fireEvent.click(left)
        fireEvent.click(left)
        testSquares(squares, 0)
      }, jestTimeout)
      test(`[A6 ${label}] Actions: up, right
          Active Square should be index 2`, () => {
        fireEvent.click(up)
        fireEvent.click(right)
        testSquares(squares, 2)
      }, jestTimeout)
      test(`[A7 ${label}] Actions: up, right, right
          Active Square should be index 2`, () => {
        fireEvent.click(up)
        fireEvent.click(right)
        fireEvent.click(right)
        testSquares(squares, 2)
      }, jestTimeout)
      test(`[A8 ${label}] Actions: right
          Active Square should be index 5`, () => {
        fireEvent.click(right)
        testSquares(squares, 5)
      }, jestTimeout)
      test(`[A9 ${label}] Actions: right, right
          Active Square should be index 5`, () => {
        fireEvent.click(right)
        fireEvent.click(right)
        testSquares(squares, 5)
      }, jestTimeout)
      test(`[A10 ${label}] Actions: right, down
          Active Square should be index 8`, () => {
        fireEvent.click(right)
        fireEvent.click(down)
        testSquares(squares, 8)
      }, jestTimeout)
      test(`[A11 ${label}] Actions: right, down, down
          Active Square should be index 8`, () => {
        fireEvent.click(right)
        fireEvent.click(down)
        fireEvent.click(down)
        testSquares(squares, 8)
      }, jestTimeout)
      test(`[A12 ${label}] Actions: down, left
          Active Square should be index 6`, () => {
        fireEvent.click(down)
        fireEvent.click(left)
        testSquares(squares, 6)
      }, jestTimeout)
      test(`[A13 ${label}] Actions: down, down, left, left
          Active Square should be index 6`, () => {
        fireEvent.click(down)
        fireEvent.click(down)
        fireEvent.click(left)
        fireEvent.click(left)
        testSquares(squares, 6)
      }, jestTimeout)
    })
    describe(`[B ${label}] Coordinates Readout`, () => {
      test(`[B1] Actions: none (Initial State of <App />)
          Coordinates should be (2,2)`, () => {
        expect(coordinates.textContent).toMatch(/\(2.*2\)$/)
      }, jestTimeout)
      test(`[B2 ${label}] Actions: up
          Coordinates should be (2,1)`, () => {
        fireEvent.click(up)
        expect(coordinates.textContent).toMatch(/\(2.*1\)$/)
      }, jestTimeout)
      test(`[B3 ${label}] Actions: up, up
          Coordinates should be (2,1)`, () => {
        fireEvent.click(up)
        fireEvent.click(up)
        expect(coordinates.textContent).toMatch(/\(2.*1\)$/)
      }, jestTimeout)
      test(`[B4 ${label}] Actions: up, left
          Coordinates should be (1,1)`, () => {
        fireEvent.click(up)
        fireEvent.click(left)
        expect(coordinates.textContent).toMatch(/\(1.*1\)$/)
      }, jestTimeout)
      test(`[B5 ${label}] Actions: up, left, left
          Coordinates should be (1,1)`, () => {
        fireEvent.click(up)
        fireEvent.click(left)
        fireEvent.click(left)
        expect(coordinates.textContent).toMatch(/\(1.*1\)$/)
      }, jestTimeout)
      test(`[B6 ${label}] Actions: up, right
          Coordinates should be (3,1)`, () => {
        fireEvent.click(up)
        fireEvent.click(right)
        expect(coordinates.textContent).toMatch(/\(3.*1\)$/)
      }, jestTimeout)
      test(`[B7 ${label}] Actions: up, right, right
          Coordinates should be (3,1)`, () => {
        fireEvent.click(up)
        fireEvent.click(right)
        fireEvent.click(right)
        expect(coordinates.textContent).toMatch(/\(3.*1\)$/)
      }, jestTimeout)
      test(`[B8 ${label}] Actions: right
          Coordinates should be (3,2)`, () => {
        fireEvent.click(right)
        expect(coordinates.textContent).toMatch(/\(3.*2\)$/)
      }, jestTimeout)
      test(`[B9 ${label}] Actions: right, right
          Coordinates should be (3,2)`, () => {
        fireEvent.click(right)
        fireEvent.click(right)
        expect(coordinates.textContent).toMatch(/\(3.*2\)$/)
      }, jestTimeout)
      test(`[B10 ${label}] Actions: right, down
          Coordinates should be (3,3)`, () => {
        fireEvent.click(right)
        fireEvent.click(down)
        expect(coordinates.textContent).toMatch(/\(3.*3\)$/)
      }, jestTimeout)
      test(`[B11 ${label}] Actions: right, down, down
          Coordinates should be (3,3)`, () => {
        fireEvent.click(right)
        fireEvent.click(down)
        fireEvent.click(down)
        expect(coordinates.textContent).toMatch(/\(3.*3\)$/)
      }, jestTimeout)
      test(`[B12 ${label}] Actions: down, left
          Coordinates should be (1,3)`, () => {
        fireEvent.click(down)
        fireEvent.click(left)
        expect(coordinates.textContent).toMatch(/\(1.*3\)$/)
      }, jestTimeout)
      test(`[B13 ${label}] Actions: down, down, left, left
          Coordinates should be (1,3)`, () => {
        fireEvent.click(down)
        fireEvent.click(down)
        fireEvent.click(left)
        fireEvent.click(left)
        expect(coordinates.textContent).toMatch(/\(1.*3\)$/)
      }, jestTimeout)
    })
    describe(`[C ${label}] Limit Reached Message`, () => {
      test(`[C1 ${label}] Actions: none (Initial State of <App />)
          Limit reached message should be empty`, () => {
        expect(message.textContent).toBeFalsy()
      }, jestTimeout)
      test(`[C2 ${label}] Actions: up
          Limit reached message should be empty`, () => {
        fireEvent.click(up)
        expect(message.textContent).toBeFalsy()
      }, jestTimeout)
      test(`[C3 ${label}] Actions: up, up
          Limit reached message should be "You can't go up"`, () => {
        fireEvent.click(up)
        fireEvent.click(up)
        expect(message.textContent).toBe("You can't go up")
      }, jestTimeout)
      test(`[C4 ${label}] Actions: up, left
          Limit reached message should be empty`, () => {
        fireEvent.click(up)
        fireEvent.click(left)
        expect(message.textContent).toBeFalsy()
      }, jestTimeout)
      test(`[C5 ${label}] Actions: up, left, left
          Limit reached message should be "You can't go left"`, () => {
        fireEvent.click(up)
        fireEvent.click(left)
        fireEvent.click(left)
        expect(message.textContent).toBe("You can't go left")
      }, jestTimeout)
      test(`[C6 ${label}] Actions: up, right
          Limit reached message should be empty`, () => {
        fireEvent.click(up)
        fireEvent.click(right)
        expect(message.textContent).toBeFalsy()
      }, jestTimeout)
      test(`[C7 ${label}] Actions: up, right, right
          Limit reached message should be "You can't go right"`, () => {
        fireEvent.click(up)
        fireEvent.click(right)
        fireEvent.click(right)
        expect(message.textContent).toBe("You can't go right")
      }, jestTimeout)
      test(`[C8 ${label}] Actions: right
          Limit reached message should be empty`, () => {
        fireEvent.click(right)
        expect(message.textContent).toBeFalsy()
      }, jestTimeout)
      test(`[C9 ${label}] Actions: right, right
          Limit reached message should be (3,2)`, () => {
        fireEvent.click(right)
        fireEvent.click(right)
        expect(message.textContent).toBe("You can't go right")
      }, jestTimeout)
      test(`[C10 ${label}] Actions: right, down
          Limit reached message should be empty`, () => {
        fireEvent.click(right)
        fireEvent.click(down)
        expect(message.textContent).toBeFalsy()
      }, jestTimeout)
      test(`[C11 ${label}] Actions: right, down, down
          Limit reached message should be "You can't go down"`, () => {
        fireEvent.click(right)
        fireEvent.click(down)
        fireEvent.click(down)
        expect(message.textContent).toBe("You can't go down")
      }, jestTimeout)
      test(`[C12 ${label}] Actions: down, left
          Limit reached message should be empty`, () => {
        fireEvent.click(down)
        fireEvent.click(left)
        expect(message.textContent).toBeFalsy()
      }, jestTimeout)
      test(`[C13 ${label}] Actions: down, down, left, left
          Limit reached message should be "You can't go left"`, () => {
        fireEvent.click(down)
        fireEvent.click(down)
        fireEvent.click(left)
        fireEvent.click(left)
        expect(message.textContent).toBe("You can't go left")
      }, jestTimeout)
    })
    describe(`[D ${label}] Steps Counter`, () => {
      test(`[D1 ${label}] Steps counter works correctly`, () => {
        expect(steps.textContent).toBe("You moved 0 times")
        fireEvent.click(up)
        fireEvent.click(up)
        fireEvent.click(left)
        expect(steps.textContent).toBe("You moved 2 times")
        fireEvent.click(right)
        fireEvent.click(right)
        expect(steps.textContent).toBe("You moved 4 times")
        fireEvent.click(down)
        fireEvent.click(down)
        fireEvent.click(down)
        expect(steps.textContent).toBe("You moved 6 times")
        fireEvent.click(left)
        fireEvent.click(left)
        fireEvent.click(left)
        expect(steps.textContent).toBe("You moved 8 times")
      }, jestTimeout)
      test(`[D2 ${label}] Steps counter handles a single step gracefully`, () => {
        fireEvent.click(up)
        expect(steps.textContent).toBe("You moved 1 time")
        fireEvent.click(up)
        expect(steps.textContent).toBe("You moved 1 time")
      }, jestTimeout)
    })
    describe(`[E ${label}] Reset Button`, () => {
      test(`[E1 ${label}] Active Square is reset`, () => {
        fireEvent.click(up)
        fireEvent.click(up)
        fireEvent.click(left)
        testSquares(squares, 0)
        fireEvent.click(reset)
        testSquares(squares, 4)
      }, jestTimeout)
      test(`[E2 ${label}] Coordinates are reset`, () => {
        fireEvent.click(up)
        fireEvent.click(up)
        fireEvent.click(left)
        expect(coordinates.textContent).toMatch(/\(1.*1\)$/)
        fireEvent.click(reset)
        expect(coordinates.textContent).toMatch(/\(2.*2\)$/)
      }, jestTimeout)
      test(`[E3 ${label}] Message is reset`, () => {
        fireEvent.click(up)
        fireEvent.click(up)
        expect(message.textContent).toBe("You can't go up")
        fireEvent.click(reset)
        expect(message.textContent).toBeFalsy()
      }, jestTimeout)
      test(`[E4 ${label}] Steps are reset`, () => {
        fireEvent.click(up)
        fireEvent.click(up)
        fireEvent.click(left)
        expect(steps.textContent).toBe("You moved 2 times")
        fireEvent.click(reset)
        expect(steps.textContent).toBe("You moved 0 times")
      }, jestTimeout)
      test(`[E5 ${label}] Email input is reset`, () => {
        fireEvent.change(email, { target: { value: 'lady@gaga.com' } })
        expect(email).toHaveValue('lady@gaga.com')
        fireEvent.click(reset)
        expect(email.value).toBeFalsy()
      }, jestTimeout)
    })
    // ASYNC TESTS, CAREFUL TO AVOID PERFORMANCE ISSUES!
    // ASYNC TESTS, CAREFUL TO AVOID PERFORMANCE ISSUES!
    // ASYNC TESTS, CAREFUL TO AVOID PERFORMANCE ISSUES!
    describe(`[F ${label}] Submit Button`, () => {
      test(`[F1 ${label}] Actions: up, type email, submit
          Success message is correct`, async () => {
        fireEvent.click(up)
        fireEvent.change(email, { target: { value: 'lady@gaga.com' } })
        fireEvent.click(submit)
        await screen.findByText('lady win #31', queryOptions, waitForOptions)
      }, jestTimeout)
      test(`[F2 ${label}] Actions: down, down, type email, submit
          Success message is correct`, async () => {
        fireEvent.click(down)
        fireEvent.click(down)
        fireEvent.change(email, { target: { value: 'lady@gaga.com' } })
        fireEvent.click(submit)
        await screen.findByText('lady win #43', queryOptions, waitForOptions)
      }, jestTimeout)
      test(`[F3 ${label}] Actions: up, down, left, right, type email, submit
          Success message is correct`, async () => {
        fireEvent.click(up)
        fireEvent.click(down)
        fireEvent.click(left)
        fireEvent.click(right)
        fireEvent.change(email, { target: { value: 'lady@gaga.com' } })
        fireEvent.click(submit)
        await screen.findByText('lady win #73', queryOptions, waitForOptions)
      }, jestTimeout)
      test(`[F4 ${label}] Actions: down, right, submit
          Error message on no email is correct`, async () => {
        fireEvent.click(down)
        fireEvent.click(right)
        fireEvent.click(submit)
        await screen.findByText('Ouch: email is required', queryOptions, waitForOptions)
      }, jestTimeout)
      test(`[F5 ${label}] Actions: down, right, type invalid email, submit
          Error message on invalid email is correct`, async () => {
        fireEvent.click(down)
        fireEvent.click(right)
        fireEvent.change(email, { target: { value: 'bad@email' } })
        fireEvent.click(submit)
        await screen.findByText('Ouch: email must be a valid email', queryOptions, waitForOptions)
      }, jestTimeout)
      test(`[F6 ${label}] Actions: down, right, type foo@bar.baz email, submit
          Error message on banned email is correct`, async () => {
        fireEvent.click(down)
        fireEvent.click(right)
        fireEvent.change(email, { target: { value: 'foo@bar.baz' } })
        fireEvent.click(submit)
        await screen.findByText('foo@bar.baz failure #71', queryOptions, waitForOptions)
      }, jestTimeout)
      test(`[F7 ${label}] Actions: left, type valid email, submit
          Submitting resets the email input`, async () => {
        fireEvent.click(left)
        fireEvent.change(email, { target: { value: 'lady@gaga.com' } })
        fireEvent.click(submit)
        await screen.findByText('lady win #29', queryOptions, waitForOptions)
        expect(email.value).toBeFalsy()
      }, jestTimeout)
      test(`[F8 ${label}] Actions: up, right, type valid email, submit
          Submitting does not reset coordinates nor steps`, async () => {
        fireEvent.click(up)
        fireEvent.click(right)
        fireEvent.change(email, { target: { value: 'lady@gaga.com' } })
        fireEvent.click(submit)
        await screen.findByText('lady win #49', queryOptions, waitForOptions)
        expect(coordinates.textContent).toMatch(/\(3.*1\)$/)
        expect(steps.textContent).toBe('You moved 2 times')
      }, jestTimeout)
    })
  })
})
