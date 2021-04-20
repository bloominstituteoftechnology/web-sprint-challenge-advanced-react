import React, { Component } from "react";
import axios from "axios";

export default class PlantList extends Component {
  // add state with a property called "plants" - initialize as an empty array *COMPLETE
      constructor () {
        super();
        this.state = {
          plants: []
        }
      }
  // when the component mounts:
  //   - fetch data from the server endpoint - http://localhost:3333/plants *COMPLETE
  //   - set the returned plants array to this.state.plants *COMPLETE, the data has yet to show up, but it is being returned upon pressing the plants button on the home page

  /*********  DON'T CHANGE ANYTHING IN THE RENDER FUNCTION *********/
  componentDidMount() {
    axios.get('http://localhost:3333/plants')
      .then(res => {
        // DB Previous:
        // this.setState({...this.state, plants: res.plantsData});
        this.setState({ plants: res.data});
        console.log("The data array", res); //res.data is common response w/ axios, console log with res following to see actual data structure
      })
      .catch(err => console.log(err));
  }


  render() {
    return (
      <main className="plant-list">
        {this.state?.plants?.map((plant) => (
          <div className="plant-card" key={plant.id} data-testid="plant-card">
            <img className="plant-image" src={plant.img} alt={plant.name} />
            <div className="plant-details">
              <h2 className="plant-name">{plant.name}</h2>
              <p className="plant-scientific-name">{plant.scientificName}</p>
              <p>{plant.description}</p>
              <div className="plant-bottom-row">
                <p>${plant.price}</p>
                <p><span role="img" aria-label="Light">☀️</span> {plant.light}</p>
                <p><span role="img" aria-label="Watering">💦</span> {plant.watering}x/month</p>
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





