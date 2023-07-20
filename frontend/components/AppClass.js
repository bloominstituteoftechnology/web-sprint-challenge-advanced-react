import React from 'react'
import axios from "axios"

// Suggested initial states
const initialMessage = ''
const initialEmail = ''
const initialSteps = 0
const initialIndex = 4 // the index the "B" is at

const initialState = {
  message: initialMessage,
  email: initialEmail,
  index: initialIndex,
  steps: initialSteps,
}

export default class AppClass extends React.Component {
  // THE FOLLOWING HELPERS ARE JUST RECOMMENDATIONS.
  // You can delete them and build your own logic from scratch.
  constructor(){
    super();

    this.state = {
      gameState: {
        ...initialState,
      xCoord: 2,
      yCoord: 2
      }
    }
  }

  getXY = (coordinate, x, y) => {
    // It it not necessary to have a state to track the coordinates.
    // It's enough to know what index the "B" is at, to be able to calculate them.
    if (coordinate === "11"){
      this.move(0, x, y)
    }
    else if (coordinate === "21"){
      this.move(1, x, y)
    }
    else if (coordinate === "31"){
      this.move(2, x, y)
    }
    else if (coordinate === "12"){
      this.move(3, x, y)
    }
    else if (coordinate === "22"){
      this.move(4, x, y)
    }
    else if (coordinate === "32"){
      this.move(5, x, y)
    }
    else if (coordinate === "13"){
      this.move(6, x, y)
    }
    else if (coordinate === "23"){
      this.move(7, x, y)
    }
    else if (coordinate === "33"){
      this.move(8, x, y)
    }
  }

  getXYMessage = (direction) => {
    // It it not necessary to have a state to track the "Coordinates (2, 2)" message for the user.
    // You can use the `getXY` helper above to obtain the coordinates, and then `getXYMessage`
    // returns the fully constructed string.

    if (direction === "left"){
      this.setState({
        ...this.state, gameState: {
          ...this.state.gameState,
          message: "You can't go left"
        }
      })
    }
    else if (direction === "right"){
      this.setState({
        ...this.state, gameState: {
          ...this.state.gameState,
          message: "You can't go right"
        }
      })
    }
    else if (direction === "up"){
      this.setState({
        ...this.state, gameState: {
          ...this.state.gameState,
          message: "You can't go up"
        }
      })
    }
    else if (direction === "down"){
      this.setState({
        ...this.state, gameState: {
          ...this.state.gameState,
          message: "You can't go down"
        }
      })
    }
  }

  reset = () => {
    // Use this helper to reset all states to their initial values.
    this.setState({
      ...this.state,
      gameState: {
        message: initialState.message,
        email: initialState.email,
        index: initialState.index, 
        steps: initialState.steps,
        xCoord: 2,
        yCoord: 2
      }
    })
  }

  getNextIndex = (direction) => {
    // This helper takes a direction ("left", "up", etc) and calculates what the next index
    // of the "B" would be. If the move is impossible because we are at the edge of the grid,
    // this helper should return the current index unchanged.
    
    if (direction === "left" && this.state.gameState.xCoord !== 1){
      const newXCoord = this.state.gameState.xCoord - 1;
      const newYCoord = this.state.gameState.yCoord;
      this.getXY(("" + newXCoord + newYCoord), newXCoord, newYCoord);
    }
    else if (direction === "right" && this.state.gameState.xCoord !== 3){
      const newXCoord = this.state.gameState.xCoord + 1;
      const newYCoord = this.state.gameState.yCoord;
      this.getXY(("" + newXCoord + newYCoord), newXCoord, newYCoord);
    }
    else if (direction === "up" && this.state.gameState.yCoord !== 1){
      const newXCoord = this.state.gameState.xCoord;
      const newYCoord = this.state.gameState.yCoord - 1;
      this.getXY(("" + newXCoord + newYCoord), newXCoord, newYCoord);
    }
    else if (direction === "down" && this.state.gameState.yCoord !== 3){
      const newXCoord = this.state.gameState.xCoord;
      const newYCoord = this.state.gameState.yCoord + 1;
      this.getXY(("" + newXCoord + newYCoord), newXCoord, newYCoord);
    }
    else {
      this.getXYMessage(direction);
    }
  }

  move = (newIndex, x, y) => {
    // This event handler can use the helper above to obtain a new index for the "B",
    // and change any states accordingly.
    this.setState({
      ...this.state,
      gameState: {
        ...this.state.gameState,
        index: newIndex,
        xCoord: x,
        yCoord: y,
        steps: this.state.gameState.steps + 1,
        message: ""
      }
    })
  }

  onChange = (evt) => {
    const emailInput = evt.target.value;
    this.setState({
      ...this.state, gameState: {
        ...this.state.gameState,
        email: emailInput
      }
    })
  }

  onSubmit = (evt) => { 
    evt.preventDefault();
    const URL = "http://localhost:9000/api/result" 
    axios.post(URL, {"x": this.state.gameState.xCoord, "y": this.state.gameState.yCoord, "steps": this.state.gameState.steps, "email": ""})
    .then(res => {
      this.setState({
        ...this.state, 
        gameState: {
          ...this.state.gameState,
          message: res.data.message
        }
      })
    })
    .catch(err => {
      this.setState({
        ...this.state,
        gameState: {
          ...this.state.gameState,
          message: err.response.data.message
        }
      })
    });
  }

  render() {

    const { className } = this.props
    return (
      <div id="wrapper" className={className}>
        <div className="info">
          <h3 id="coordinates">Coordinates ({this.state.gameState.xCoord}, {this.state.gameState.yCoord})</h3>
          <h3 id="steps">You moved {this.state.gameState.steps} times</h3>
        </div>
        <div id="grid">
          {
            [0, 1, 2, 3, 4, 5, 6, 7, 8].map(idx => (
              <div key={idx} className={`square${idx === this.state.gameState.index ? ' active' : ''}`}>
                {idx === this.state.gameState.index ? 'B' : null}
              </div>
            ))
          }
        </div>
        <div className="info">
          <h3 id="message">{this.state.gameState.message}</h3>
        </div>
        <div id="keypad">
          <button id="left" onClick={() => this.getNextIndex("left")}>LEFT</button>
          <button id="up" onClick={() => this.getNextIndex("up")}>UP</button>
          <button id="right" onClick={() => this.getNextIndex("right")}>RIGHT</button>
          <button id="down" onClick={() => this.getNextIndex("down")}>DOWN</button>
          <button id="reset" onClick={this.reset}>reset</button>
        </div>
        <form onSubmit={this.onSubmit}>
          <input id="email" type="email" placeholder="type email" onChange={this.onChange}></input>
          <input id="submit" type="submit"></input>
        </form>
      </div>
    )
  }
}
