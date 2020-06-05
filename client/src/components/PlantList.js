import React, { Component } from "react";
import axios from "axios";

export default class PlantList extends Component {
  // add state with a property called "plants" - initialize as an empty array
  constructor(props) {
    super(props);
  
    this.state = {
       plants: []
    }
  };
  

  // when the component mounts:
  //   - fetch data from the server endpoint - http://localhost:3333/plants
  //   - set the returned plants array to this.state.plants


  componentDidMount() {
    axios.get('http://localhost:3333/plants')
      .then((res) => {
        console.log('Response',res); 
        this.setState({ plants: res.data.plantsData })
      })
        .catch((err) => console.error("This error occured", err))
  }

  /*********  DON'T CHANGE ANYTHING IN THE RENDER FUNCTION *********/
  render() {
    return (
      <main className="plant-list">
        {this.state?.plants?.map((plant) => (
          <div className="plant-card" key={plant.id}>
            <img className="plant-image" src={plant.img} alt={plant.name} />
            <div className="plant-details">
              <h2 className="plant-name">{plant.name}</h2>
              <p className="plant-scientific-name">{plant.scientificName}</p>
              <p>{plant.description}</p>
              <div className="plant-bottom-row">
                <p><span role="img" aria-label="dollar-sign">${plant.price}</span></p>
                <p><span role="img" aria-label="light">☀️ {plant.light}</span></p>
                <p><span role="img" aria-label="water-splash">💦 {plant.watering}</span>x/month</p>
              </div>
              <button
                className="plant-button"
                onClick={() => this.props.addToCart(plant)}
              >
                Add to cart
              </button>
            </div>
          </div>
        ))}
      </main>
    );
  }
}
