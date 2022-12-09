import React, {useState} from 'react'
import axios from 'axios'
import * as yup from 'yup'

const formSchema = yup.object().shape({
  formValue: yup
    .string()
    .email('Ouch: email must be a valid email')
    .required('Ouch: email is required')
    .notOneOf(['foo@bar.baz'],'foo@bar.baz failure #71')
})

// Suggested initial states
const initialMessage = ''
const initialEmail = ''
const initialSteps = 0
const initialIndex = 4 // the index the "B" is at
const initialX = 2
const initialY = 2



export default function AppFunctional(props) {
  // THE FOLLOWING HELPERS ARE JUST RECOMMENDATIONS.
  // You can delete them and build your own logic from scratch.
  const [x, setX] = useState(initialX)
  const [y, setY] = useState(initialY)
  const [xy, setXY] = useState(initialIndex)
  const [moves, setMoves] = useState(0)
  const [messages, setMessages] = useState(initialMessage)
  const [formValue, setFormValue] = useState('')

  function getXY(){
    return (`(${x},${y})`)
    // It it not necessary to have a state to track the coordinates.
    // It's enough to know what index the "B" is at, to be able to calculate them.
  }

  function reset() {
    // Use this helper to reset all states to their initial values.
    setMoves(0)
    setXY(initialIndex)
    setX(initialX)
    setY(initialY)
    setMessages(initialMessage)
    setFormValue('')
  }

  function getNextIndex(direction) {
    if(direction === 'left'){
      if (x - 1 === 0){
        setMessages("You can't go left")
        return xy
      }
      setX(x-1)
      setXY(xy - 1)
      setMoves(moves + 1)
      setMessages(initialMessage)
    }
    if(direction === 'down'){
      if (y + 1 === 4){
        setMessages("You can't go down")
        return xy
      }
      setY(y+1)
      setXY(xy + 3)
      setMoves(moves + 1)
      setMessages(initialMessage)
    }
    if(direction === 'right'){
      if (x + 1 === 4){
        setMessages("You can't go right")
        return xy
      }
      setX(x+1)
      setXY(xy + 1)
      setMoves(moves + 1)
      setMessages(initialMessage)
    }
    if(direction === 'up'){
      if (y - 1 === 0){
        setMessages("You can't go up")
        return xy
      }
      setY(y-1)
      setXY(xy - 3)
      setMoves(moves + 1)
      setMessages(initialMessage)
    }
    


    // This helper takes a direction ("left", "up", etc) and calculates what the next index
    // of the "B" would be. If the move is impossible because we are at the edge of the grid,
    // this helper should return the current index unchanged.
  }

  function move(evt) {
    getNextIndex(evt)
    
    // This event handler can use the helper above to obtain a new index for the "B",
    // and change any states accordingly.
  }

  function onChange(evt) {
    setFormValue(evt.target.value)
  }

  const validate = (name,value) => {
    yup.reach(formSchema, name)
      .validate(value)
      .then(() => post())
      .catch(err => setMessages(err.errors[0]))
  }

  function onSubmit(evt) {
    evt.preventDefault()
    validate('formValue', formValue);
  }

  function post(){
    const toSend = {
      "x": x,
      "y": y,
      "steps": moves,
      "email": formValue
    }
    axios.post('http://localhost:9000/api/result', toSend)
      .then(({data}) => {setMessages(data.message)})
      .finally(setFormValue(''))
  }

  return (
    <div id="wrapper" className={props.className}>
      <div className="info">
        <h3 id="coordinates">{`Coordinates ${getXY()}`}</h3>
        <h3 id="steps">{`You moved ${moves} ${moves === 1 ? 'time' : 'times'}`}</h3>
      </div>
      <div id="grid">
        {
          [0, 1, 2, 3, 4, 5, 6, 7, 8].map(idx => (
            <div key={idx} className={`square${idx === xy ? ' active' : ''}`}>
              {idx === xy ? 'B' : null}
            </div>
          ))
        }
      </div>
      <div className="info">
        <h3 id="message" data-testid='message'>{messages}</h3>
      </div>
      <div id="keypad">
        <button id="left" onClick={(e) => move(e.target.id)}>LEFT</button>
        <button id="up" data-testid="up" onClick={(e) => move(e.target.id)}>UP</button>
        <button id="right" onClick={(e) => move(e.target.id)}>RIGHT</button>
        <button id="down" onClick={(e) => move(e.target.id)}>DOWN</button>
        <button id="reset" data-testid="reset" onClick={() =>reset()}>reset</button>
      </div>
      <form onSubmit={(e) => onSubmit(e)}>
        <input id="email" type="text" placeholder="type email" value={formValue} onChange={(e) => onChange(e)}></input>
        <input id="submit" data-testid="submit" type="submit"></input>
      </form>
    </div>
  )
}
