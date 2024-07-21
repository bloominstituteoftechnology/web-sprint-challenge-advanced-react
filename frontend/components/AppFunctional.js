import React, { useState } from 'react';
import axios from 'axios';

// Suggested initial states
const initialMessage = '';
const initialEmail = '';
const initialSteps = 0;
const initialIndex = 4; // the index the "B" is at

export default function AppFunctional(props) {
  // dont foegt to add State management
  const [index, setIndex] = useState(initialIndex);
  const [steps, setSteps] = useState(initialSteps);
  const [message, setMessage] = useState(initialMessage);
  const [email, setEmail] = useState(initialEmail);

  // get the coordinates from the index
  function getXY() {
    const coordinates = [
      [1, 1], [2, 1], [3, 1],
      [1, 2], [2, 2], [3, 2],
      [1, 3], [2, 3], [3, 3],
    ];
    return coordinates[index];
  }

  // get the coordinates message
  function getXYMessage() {
    const [x, y] = getXY();
    return `Coordinates (${x}, ${y})`;
  }

  // Reseting all states to their initial values
  function reset() {
    setIndex(initialIndex);
    setSteps(initialSteps);
    setMessage(initialMessage);
    setEmail(initialEmail);
  }

  // function to get the next index based on the direction
  function getNextIndex(direction) {
    const moves = {
      up: -3,
      down: 3,
      left: -1,
      right: 1,
    };

    const newIndex = index + moves[direction];

    // Checking if the moved square is valid
    if (newIndex < 0 || newIndex >= 9 || (direction === 'left' && index % 3 === 0) || (direction === 'right' && index % 3 === 2)) {
      return index;
    } else {
      return newIndex;
    }
  }

  // eevent handler for movement buttons
  function move(evt) {
    const direction = evt.target.id;
    const newIndex = getNextIndex(direction);

    if (newIndex !== index) {
      setIndex(newIndex);
      setSteps(steps + 1);
      setMessage('');
    } else {
      setMessage(`You can't go ${direction}`);
    }
  }

  // handler to update the email input value
  function onChange(evt) {
    setEmail(evt.target.value);
  }

  //  handler for the form submission
  async function onSubmit(evt) {
    evt.preventDefault();
    const [x, y] = getXY();
    try {
      const response = await axios.post('http://localhost:9000/api/result', { x, y, steps, email });
      setMessage(response.data.message);
    } catch (err) {
      setMessage(err.response.data.message);
    }
    setEmail(''); // Clear the email input after submission
  }

  return (
    <div id="wrapper" className={props.className}>
      <div className="info">
        <h3 id="coordinates">{getXYMessage()}</h3>
        <h3 id="steps">You moved {steps} {steps === 1 ? 'time' : 'times'}</h3>
      </div>
      <div id="grid">
        {
          [0, 1, 2, 3, 4, 5, 6, 7, 8].map(idx => (
            <div key={idx} className={`square${idx === index ? ' active' : ''}`}>
              {idx === index ? 'B' : null}
            </div>
          ))
        }
      </div>
      <div className="info">
        <h3 id="message">{message}</h3>
      </div>
      <div id="keypad">
        <button id="left" onClick={move}>LEFT</button>
        <button id="up" onClick={move}>UP</button>
        <button id="right" onClick={move}>RIGHT</button>
        <button id="down" onClick={move}>DOWN</button>
        <button id="reset" onClick={reset}>reset</button>
      </div>
      <form onSubmit={onSubmit}>
        <input 
          id="email" 
          type="email" 
          placeholder="type email" 
          value={email} 
          onChange={onChange} 
        />
        <input id="submit" type="submit" />
      </form>
    </div>
  );
}
