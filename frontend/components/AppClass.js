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

const initialState = {
  message: initialMessage,
  email: initialEmail,
  index: initialIndex,
  steps: initialSteps,
}

export default class AppClass extends React.Component {
  constructor(){
    super()
    this.state= {
      x: initialX,
      y: initialY,
      steps: initialSteps,
      xy: initialIndex,
      message: initialMessage,
      formValues: ''
    }
    
  }
  // THE FOLLOWING HELPERS ARE JUST RECOMMENDATIONS.
  // You can delete them and build your own logic from scratch.

  getXY = () => {
    return(`(${this.state.x},${this.state.y})`)
    
    // It it not necessary to have a state to track the coordinates.
    // It's enough to know what index the "B" is at, to be able to calculate them.
  }

  reset = () => {
    this.setState({
      x: initialX,
      y: initialY,
      steps: initialSteps,
      message: initialMessage,
      xy: initialIndex,
      formValues: ''
    })
  }

  getNextIndex = (direction) => {
    if(direction === 'left'){
      if(this.state.x - 1 === 0){
        return ({"x": this.state.x, "y":this.state.y})
      }
      return ({"x": this.state.x - 1, "y":this.state.y,"xy":this.state.xy -1,"steps": this.state.steps + 1})
    }
    if(direction === 'right'){
      if(this.state.x + 1 === 4){
        return ({"x": this.state.x, "y":this.state.y})
      }
      return ({"x": this.state.x + 1, "y":this.state.y,"xy":this.state.xy + 1,"steps": this.state.steps + 1})
    }
    if(direction === 'up'){
      if(this.state.y - 1 === 0){
        return ({"x": this.state.x, "y":this.state.y})
      }
      return ({"x": this.state.x, "y":this.state.y - 1,"xy":this.state.xy - 3,"steps": this.state.steps + 1})
    }
    if(direction === 'down'){
      if(this.state.y + 1 === 4){
        return ({"x": this.state.x, "y":this.state.y})
      }
      return ({"x": this.state.x, "y":this.state.y + 1,"xy":this.state.xy + 3,"steps": this.state.steps + 1})
    }
    // This helper takes a direction ("left", "up", etc) and calculates what the next index
    // of the "B" would be. If the move is impossible because we are at the edge of the grid,
    // this helper should return the current index unchanged.
  }

  move = (evt) => {
    let nextMove = this.getNextIndex(evt.target.id)
    if (`(${nextMove.x},${nextMove.y})` === this.getXY()){
      return this.setState({message: `You can't go ${evt.target.id}`})
    }
    this.setState({...this.state,
      message: initialMessage,
      x: nextMove.x,
      y: nextMove.y,
      steps: nextMove.steps,
      xy: nextMove.xy})
    // This event handler can use the helper above to obtain a new index for the "B",
    // and change any states accordingly.
  }

  onChange = (evt) => {
    this.setState({formValues: evt.target.value})
  }

  validate = (name,value) => {
    yup.reach(formSchema, name)
      .validate(value)
      .then(() => this.post())
      .catch(err => this.setState({message:err.errors[0]}))
  }

  post = () => {
    const toSend = {
      "x": this.state.x,
      "y": this.state.y,
      "steps": this.state.steps,
      "email": this.state.formValues
    }
    axios.post('http://localhost:9000/api/result', toSend)
      .then(({data}) => {this.setState({message: data.message})})
      .finally(this.setState({formValues: ''}))
  }

  onSubmit = (evt) => {
    evt.preventDefault()
    this.validate('formValue', this.state.formValues)
  }

  render() {
    const { className } = this.props
    return (
      <div id="wrapper" className={className}>
        <div className="info">
          <h3 id="coordinates">{`Coordinates ${this.getXY()}`}</h3>
          <h3 id="steps">{`You moved ${this.state.steps} ${this.state.steps === 1 ? 'time' : 'times'}`}</h3> {/*Stateful move tracker*/}
        </div>
        <div id="grid">
          {
            [0, 1, 2, 3, 4, 5, 6, 7, 8].map(idx => (
              <div key={idx} className={`square${idx === this.state.xy ? ' active' : ''}`}>
                {idx === this.state.xy ? 'B' : null} 
              </div>
            ))
          }
        </div>
        <div className="info">
          <h3 id="message">{this.state.message}</h3>{/*display message from API call*/}
        </div>
        <div id="keypad">
          <button id="left" onClick={(e) => this.move(e)}>LEFT</button>
          <button id="up" onClick={(e) => this.move(e)}>UP</button>
          <button id="right" onClick={(e) => this.move(e)}>RIGHT</button>
          <button id="down" onClick={(e) => this.move(e)}>DOWN</button>
          <button id="reset" onClick={() => this.reset()}>reset</button>
        </div>
        <form onSubmit={(e) => this.onSubmit(e)}>
          <input id="email" type="text" placeholder="type email" value={this.state.formValues} onChange={(e) => this.onChange(e)}></input>
          <input id="submit" type="submit"></input>
        </form>
      </div>
    )
  }
}