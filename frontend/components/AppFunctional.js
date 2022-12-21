import React, { useState } from 'react'
import axios from 'axios'
import * as yup from 'yup'
import { useSearchParams } from 'react-router-dom'

const formSchema = yup.object().shape({
  formValue: yup.string()
  .email('Error: email must be a valid email').required('Error:Email is required').notOneOf(['foo@bar.baz','foo@bar.baz failure #71'])
})

// Suggested initial states
const initialMessage = ''
const initialEmail = ''
const initialSteps = 0
const initialIndex = 4 // the index the "B" is at
const initialX = 2
const initialY = 2

export default function AppFunctional(props) {
const [x, setX] = useState(initialX)
const [y, setY] = useState(initialY)
const [xy, setxy] = useState(initialIndex)
const [move, setMoves] = useState(0)
const [messages, setMessages] = useState(initialMessage)
const [formValue, setFormValue] = useState('')

  function getXY() {
    return (`(${x},${y})`)
  }

  function getXYMessage() {

  }

  function reset() { setMoves(0); setxy(initialIndex); setX(initialX); setY(initialY); setMessages(initialMessage);setFormValue('');
  }

  function getNextIndex(direction) {
    // This helper takes a direction ("left", "up", etc) and calculates what the next index
    // of the "B" would be. If the move is impossible because we are at the edge of the grid,
    // this helper should return the current index unchanged.
  }

  function move(evt) {
    // This event handler can use the helper above to obtain a new index for the "B",
    // and change any states accordingly.
  }

  function onChange(evt) {
    // You will need this to update the value of the input.
  }

  function onSubmit(evt) {
    // Use a POST request to send a payload to the server.
  }

  return (
    <div id="wrapper" className={props.className}>
      <div className="info">
        <h3 id="coordinates">Coordinates (2, 2)</h3>
        <h3 id="steps">You moved 0 times</h3>
      </div>
      <div id="grid">
        {
          [0, 1, 2, 3, 4, 5, 6, 7, 8].map(idx => (
            <div key={idx} className={`square${idx === 4 ? ' active' : ''}`}>
              {idx === 4 ? 'B' : null}
            </div>
          ))
        }
      </div>
      <div className="info">
        <h3 id="message"></h3>
      </div>
      <div id="keypad">
        <button id="left">LEFT</button>
        <button id="up">UP</button>
        <button id="right">RIGHT</button>
        <button id="down">DOWN</button>
        <button id="reset">reset</button>
      </div>
      <form>
        <input id="email" type="email" placeholder="type email"></input>
        <input id="submit" type="submit"></input>
      </form>
    </div>
  )
}
