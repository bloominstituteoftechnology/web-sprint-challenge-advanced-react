import React from 'react'
import axios from 'axios'

// Suggested initial states




export default class AppClass extends React.Component {
  // THE FOLLOWING HELPERS ARE JUST RECOMMENDATIONS.
  // You can delete them and build your own logic from scratch.
  constructor(){
   
super()
  this.state = {
    message: '',
    email: '',
    index: 4,
    steps: 0,
      x: 2,
      y: 2,
      error: false,
      header: `You moved 0 times`
      
    
  }
}

  


  getXY = (number) => {
    // It it not necessary to have a state to track the coordinates.
    // It's enough to know what index the "B" is at, to be able to calculate them.

   const coordinates = [[1, 1], [2, 1], [3, 1],
 [1, 2], [2, 2], [3, 2],
    [1, 3], [2, 3],[3, 3]
  ]

    return coordinates[this.state.index].toString()

  }
  getCords = () => {
  const coordinates = this.getXY(this.index)
  this.setState({
    x: Number(coordinates[0]),
    y: Number(coordinates[2])
  })
  }
  


  reset = () => {
    // Use this helper to reset all states to their initial value
    this.setState({
      index: 4,
      steps: 0,
      header:`You moved 0 times`,
      email: '',
      message: ''
    })
  }

  componentDidUpdate( prevProps, prevState){
    if(prevState.index !== this.state.index){
      this.getCords()
    } 
 }
 


 checkErrorsLeft = () => {
 
    this.setState({
      message:("You can't go left")
    })
    return this.state.index && this.state.steps
  }
 

 checkErrorsRight = () => {
    this.setState({
      message:"You can't go right",
      error: true
    })
  
 }

 checkErrorsUp = () => {
 
    this.setState({
      message:(`You can't go up`)
    })
    return this.state.index
  }
 

 checkErrorsDown = () => {
    this.setState({
      message:"You can't go down"
    })
    return this.state.index
  }
 

 moveLeft = () => { 
  this.setState({
  index: this.state.index - 1,
  message: '',
  steps: this.state.steps + 1,
})


 }

 moveRight = () => {
  this.setState({
    index: this.state.index + 1,
    message: '',
    steps: this.state.steps + 1
  })
  
} 
 

 moveUp = () => {
  this.setState({
    index: this.state.index - 3,
    message: '',
    steps: this.state.steps + 1
  })
 
 }

 moveDown = () => {
  this.setState({
    index: this.state.index + 3,
    message: '',
    steps: this.state.steps + 1
  })
 
 }

  onChange = (evt) => {
    // You will need this to update the value of the input.
    this.setState({
      email: evt.target.value
    })
  }



  
  
  onSubmit = (evt) => {
    // Use a POST request to send a payload to the server.
    
    evt.preventDefault()
 const {x, y, steps, email} = this.state
    axios.post(`http://localhost:9000/api/result`,{x, y, steps, email} )
    .then (res => {
      this.setState({
        message: res.data.message,
        email: ''
      })
    })
    .catch(err => this.setState({
      message: err.response.data.message
      }))
  }

  render() {
    const { className } = this.props
    return (
      <div id="wrapper" className={className}>
        <div className="info">
          <h3 id="coordinates">Coordinates ({this.state.x}, {this.state.y})</h3>
          <h3 id="steps">{this.state.steps === 1 ? `You moved 1 time` : `You moved ${this.state.steps} times`}</h3>
        </div>
        <div id="grid">
          {
            [0, 1, 2, 3, 4, 5, 6, 7, 8].map(idx => (
              <div key={idx} className={`square${idx === this.state.index ? ' active' : ''}`}>
                {idx === this.state.index ? 'B' : null}
              </div>
            ))
          }
        </div>
        <div className="info">
          <h3 id="message">{this.state.message}</h3>
        </div>
        <div id="keypad">
          <button id="left" onClick={() => { 
         if(this.state.index === 0 || this.state.index === 3 || this.state.index === 6){
          this.checkErrorsLeft()
         } else
        this.moveLeft()
      }}>LEFT</button>
          <button id="up" onClick={() => {
           if(this.state.index === 0 || this.state.index === 1 || this.state.index === 2){
            this.checkErrorsUp() } else
          this.moveUp()   
          }}>UP</button>
          <button id="right" onClick={() => { 
              if(this.state.index === 2 || this.state.index === 5 || this.state.index === 8){ this.checkErrorsRight()} else
            this.moveRight()
          }}>RIGHT</button>
          <button id="down" onClick={() => {
          if(this.state.index === 6 || this.state.index === 7 || this.state.index === 8){
            this.checkErrorsDown()} else
            this.moveDown()
            }}>DOWN</button>
          <button id="reset" onClick={this.reset}>reset</button>
        </div>
        <form onSubmit={this.onSubmit}>
          <input value={this.state.email} onChange= {this.onChange}id="email" type="email" placeholder="type email"></input>
          <input id="submit" type="submit"></input>
        </form>
      </div>
    )
  }
}
