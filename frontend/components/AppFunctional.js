import React from 'react'
import { useState,useEffect, useRef} from 'react'
import axios from "axios"

// Suggested initial states
// the index the "B" is at


// How to update state 


export default function AppFunctional(props) {
  // THE FOLLOWING HELPERS ARE JUST RECOMMENDATIONS.
  // You can delete them and build your own logic from scratch.
  const [initialMessage, setIntialMessage] = useState('')
  const [initialEmail, setIntiaEmail] = useState('')
  const [initialSteps, setIntialSteps] = useState(0)
  const [initialIndex, setIntialIndex] = useState(4) 
  const [headerMessage, setHeaderMessage] = useState(`You moved ${initialSteps} times`)
 const [formData, setFormData] = useState({
  email: '',
  steps: 0,
  x: '',
  y: ''
 })

 //Create a way when at the end of the grid to not be able to go right, left,up and down

 // create a function that when called update the intitalmesssage to "You can go left,right and etc"

 //Inside the function create a conditional for when the border indexes are clicked they return the error message

useEffect( () => {
  if(initialSteps === 1){
     setHeaderMessage(`You moved ${initialSteps} time`)
  } else {
    setHeaderMessage(`You moved ${initialSteps} times`)
  }
}, [initialSteps] )

 

  function getXY(initialIndex) {
    // It it not necessary to have a state to track the coordinates.
    // It's enough to know what index the "B" is at, to be able to calculate them.
    // e.g when the number 3 is entered your varible changes to 2,1
  
    // return that number as a xy coordinate
   
   const coordinates =[ [1, 1], [2, 1], [3, 1],
 [1, 2], [2, 2], [3, 2],
    [1, 3], [2, 3],[3, 3]
   ]
   return coordinates[initialIndex].toString()
  }


  function getXYMessage() {
    // It it not necessary to have a state to track the "Coordinates (2, 2)" message for the user.
    // You can use the `getXY` helper above to obtain the coordinates, and then `getXYMessage`
    // returns the fully constructed string. 
  }

  function reset() {
    // Use this helper to reset all states to their initial values.
    setIntialSteps(0)
    setIntialIndex(4)
    setIntialMessage('')
    setHeaderMessage('You moved 0 times')
    setIntiaEmail('')
  }

  



  function onChange(evt) {
    // You will need this to update the value of t
    setIntiaEmail(evt.target.value)

  }
  const coordinates = getXY(initialIndex)
  const data = {
    email: initialEmail,
    steps: initialSteps,
    x: Number(coordinates[0]),
    y: Number(coordinates[2]),
  }


  function onSubmit(evt) {
    // Use a POST request to send a payload to the server.
   
    evt.preventDefault()
    
    


axios.post( `http://localhost:9000/api/result`,data)
  .then(res => {
setFormData({
  email: data.email,
  steps: data.steps,
  x: data.x,
  y: data.y
})
setIntialMessage(res.data.message)
setIntiaEmail('')


  })
  .catch(err => setIntialMessage(err.response.data.message))
  
  }


// The index state should correspond with 


  return (
    <div id="wrapper" className={props.className}>
      <div className="info">
        <h3 id="coordinates"> 
                    Coordinates ({data.x}, {data.y})
       </h3>
        <h3 id="steps">{headerMessage}</h3>
      </div>
      <div id="grid">
        {
          [0,1,2,3,4,5,6,7,8].map(idx => (
            <div key={idx} className={`square${idx === initialIndex ? ' active' : ''}`}>
              {idx === initialIndex ? 'B' : null}
            </div>
          ))

        }
      </div>
      <div className="info">
        <h3 id="message">
          {initialMessage}
        </h3>
      </div>
      <div id="keypad">
        <button id="left"onClick={() =>  {if(initialIndex === 0 || initialIndex === 3||
        initialIndex === 6) {
          setIntialMessage(`You can't go left`)
          return initialIndex
        } else setIntialIndex(initialIndex - 1)
        setIntialMessage('')
        setIntialSteps(initialSteps + 1)
        }}  >LEFT</button>
        <button id="up" onClick={() => {if(initialIndex === 0 || initialIndex === 1 || initialIndex === 2) {
      setIntialMessage("You can't go up")
          return initialIndex
        } else
          setIntialIndex(initialIndex -3)
          setIntialMessage('')
          setIntialSteps(initialSteps + 1)
        }} >UP</button>
        <button id="right" onClick={() => {if(initialIndex === 2 || initialIndex === 5 || initialIndex === 8) {
          setIntialMessage("You can't go right")
          return initialIndex
        } else{
          setIntialIndex(initialIndex + 1)
          setIntialMessage('')
          setIntialSteps(initialSteps + 1)
        }}} >RIGHT</button>
        <button id="down" onClick={() => {if(initialIndex === 6 || initialIndex === 7 || initialIndex === 8) {
          setIntialMessage("You can't go down")
          return initialIndex
        } else {
          setIntialIndex(initialIndex + 3)
          setIntialMessage('')
          setIntialSteps(initialSteps + 1)
        }}}>DOWN</button>
        <button id="reset" onClick={reset}> reset</button>
      </div>
      <form onSubmit={onSubmit}>
        <input value={initialEmail} onChange={onChange}id="email" type="email" placeholder="type email"></input>
        <input id="submit" type="submit"></input>
      </form>
    </div>
  )
}


