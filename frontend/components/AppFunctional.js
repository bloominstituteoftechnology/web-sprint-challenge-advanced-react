import React, { useState } from 'react'
import axios from "axios"
// Suggested initial states
const initialMessage = ''
const initialEmail = ''
const initialSteps = 0
const initialIndex = 4 // the index the "B" is at

export default function AppFunctional(props) {
  // THE FOLLOWING HELPERS ARE JUST RECOMMENDATIONS.
  // You can delete them and build your own logic from scratch.

  function getXY(coordinate, x, y) {
    // It it not necessary to have a state to track the coordinates.
    // It's enough to know what index the "B" is at, to be able to calculate them.
    if (coordinate === "11"){
      move(0, x, y)
    }
    else if (coordinate === "21"){
      move(1, x, y)
    }
    else if (coordinate === "31"){
      move(2, x, y)
    }
    else if (coordinate === "12"){
      move(3, x, y)
    }
    else if (coordinate === "22"){
      move(4, x, y)
    }
    else if (coordinate === "32"){
      move(5, x, y)
    }
    else if (coordinate === "13"){
      move(6, x, y)
    }
    else if (coordinate === "23"){
      move(7, x, y)
    }
    else if (coordinate === "33"){
      move(8, x, y)
    }
  }

  function getXYMessage(direction) {
    // It it not necessary to have a state to track the "Coordinates (2, 2)" message for the user.
    // You can use the `getXY` helper above to obtain the coordinates, and then `getXYMessage`
    // returns the fully constructed string.
    if (direction === "left"){
      setGameState({
          ...gameState,
          message: "You can't go left"
      })
    }
    else if (direction === "right"){
      setGameState({
          ...gameState,
          message: "You can't go right"
      })
    }
    else if (direction === "up"){
      setGameState({
          ...gameState,
          message: "You can't go up"
      })
    }
    else if (direction === "down"){
      setGameState({
          ...gameState,
          message: "You can't go down"
      })
    }
  }

  function reset() {
    // Use this helper to reset all states to their initial values.
    setGameState({
      message: initialMessage,
      email: initialEmail,
      index: initialIndex,
      steps: initialSteps,
      xCoord: 2,
      yCoord: 2
    });
  }

  function getNextIndex(direction) {
    // This helper takes a direction ("left", "up", etc) and calculates what the next index
    // of the "B" would be. If the move is impossible because we are at the edge of the grid,
    // this helper should return the current index unchanged.
    if (direction === "left" && gameState.xCoord !== 1){
      const newXCoord = gameState.xCoord - 1;
      const newYCoord = gameState.yCoord;
      getXY(("" + newXCoord + newYCoord), newXCoord, newYCoord);
    }
    else if (direction === "right" && gameState.xCoord !== 3){
      const newXCoord = gameState.xCoord + 1;
      const newYCoord = gameState.yCoord;
      getXY(("" + newXCoord + newYCoord), newXCoord, newYCoord);
    }
    else if (direction === "up" && gameState.yCoord !== 1){
      const newXCoord = gameState.xCoord;
      const newYCoord = gameState.yCoord - 1;
      getXY(("" + newXCoord + newYCoord), newXCoord, newYCoord);
    }
    else if (direction === "down" && gameState.yCoord !== 3){
      const newXCoord = gameState.xCoord;
      const newYCoord = gameState.yCoord + 1;
      getXY(("" + newXCoord + newYCoord), newXCoord, newYCoord);
    }
    else {
      getXYMessage(direction);
    }
  }

  function move(newIndex, x, y) {
    // This event handler can use the helper above to obtain a new index for the "B",
    // and change any states accordingly.
    setGameState({
      ...gameState,
      index: newIndex,
      steps: gameState.steps + 1,
      xCoord: x,
      yCoord: y,
      message: ""
    })
  }

  function onChange(evt) {
    // You will need this to update the value of the input.
    const emailInput = evt.target.value;
    setGameState({
      ...gameState,
      email: emailInput
    })
  }

  function onSubmit(evt) {
    // Use a POST request to send a payload to the server.
    evt.preventDefault();
    const URL = "http://localhost:9000/api/result"; 
    axios.post(URL, {"x": gameState.xCoord, "y": gameState.yCoord, "steps": gameState.steps, "email": gameState.email})
    .then(res => {
      setGameState({
        ...gameState,
        message: res.data.message,
        email: ""
      })
    })
    .catch(err => {
      setGameState({
        ...gameState,
        message: err.response.data.message
      })
    })
  }

  const [gameState, setGameState] = useState({
    message: initialMessage,
    email: initialEmail,
    index: initialIndex,
    steps: initialSteps,
    xCoord: 2,
    yCoord: 2
  })

  return (
    <div id="wrapper" className={props.className}>
      <div className="info">
        <h3 id="coordinates">Coordinates ({gameState.xCoord}, {gameState.yCoord})</h3>
        <h3 id="steps">You moved {gameState.steps} {gameState.steps === 1 ? "time" : "times"}</h3>
      </div>
      <div id="grid">
        {
          [0, 1, 2, 3, 4, 5, 6, 7, 8].map(idx => (
            <div key={idx} className={`square${idx === gameState.index ? ' active' : ''}`}>
              {idx === gameState.index ? 'B' : null}
            </div>
          ))
        }
      </div>
      <div className="info">
        <h3 id="message">{gameState.message}</h3>
      </div>
      <div id="keypad">
        <button id="left" onClick={() => getNextIndex("left")}>LEFT</button>
        <button id="up" onClick={() => getNextIndex("up")}>UP</button>
        <button id="right" onClick={() => getNextIndex("right")}>RIGHT</button>
        <button id="down" onClick={() => getNextIndex("down")}>DOWN</button>
        <button id="reset" onClick={reset}>reset</button>
      </div>
      <form onSubmit={onSubmit}>
        <input id="email" type="email" placeholder="type email" value={gameState.email} onChange={onChange}></input>
        <input id="submit" type="submit"></input>
      </form>
    </div>
  )
}
