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
const [moves, setMoves] = useState(0)
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
    if(direction === 'left'){
      if(x -1 === 0){
        setMessages('You cannot go left')
        return xy
      }
      setX(x-1); setxy( xy-1); setMoves(moves + 1); setMessages(initialMessage);
    }
    if(direction === 'down'){
      if(y + 1 === 4){
        setMessages('You cannot go down'); return xy
      }
      setY(y+1); setxy(xy + 3); setMoves( moves + 1); setMessages(initialMessage)
    }
    if(direction === ' right'){
      if(x + 1 === 4){
        setMessages('You cannot go right'); return xy;
      }
      setX(x + 1); setxy(xy + 1); setMoves(moves + 1); setMessages(initialMessage);
    }
    if(direction === 'up'){
      if(y-1 ===0){
        setMessages('You cannot go up'); return xy;
      }
      setY(y-1); setxy( xy - 3); setMoves(moves + 1); setMessages(initialMessage)
    }
  }

  function move(evt) {getNextIndex(evt)}

  function onChange(evt) {setFormValue(evt.target.value)}

  const validate = (name, value) => {yup.reach(formSchema, name).validate(value).then(()=> post()).catch(err => setMessages(err.errors[0]))}
  
  function onSubmit(evt) {
    evt.preventDefault();
    validate('formValue',formValue)
  }

  function post() {
    const toSend = {"x": x, "y": y, "steps": moves, "email": formValue}
    axios.post('http://localhost:9000/api/result', toSend)
    .then(({data})=>{setMessages(data.message)}).finally(setFormValue(''))
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
