import React, { Component } from "react";
import axios from "axios";

export default class PlantList extends Component {
  // add state with a property called "plants" - initialize as an empty array

  // when the component mounts:
  //   - fetch data from the server endpoint - http://localhost:3333/plants
  //   - set the returned plants array to this.state.plants

  /*********  DON'T CHANGE ANYTHING IN THE RENDER FUNCTION *********/

  constructor() {
    super();
    this.state = {
      plants: []
    }
    this.plantFilter = this.plantFilter.bind(this)
  }

  componentDidMount() {
    axios
      .get("http://localhost:3333/plants")
      .then(res => {
        this.setState({
          plants: res.data.plantsData,
        })

      })
  }


  plantFilter(event) {
    const plantData = this.state.plants;

    const searchResult = plantData.filter(plants => plants.name.toLowerCase().match(event.target.value || null))

    console.log(searchResult)
  }

  render() {
    return (

      <main className="plant-list">
        <div className="plant-list-input">
          <label htmlFor="search">Search Plants</label>
          <input type="text" name="search" id="search" onChange={this.plantFilter} />
        </div>
        {this.state.plants.map((plant) => (
          <div className="plant-card" key={plant.id}>
            <img className="plant-image" src={plant.img} alt={plant.name} />
            <div className="plant-details">
              <h2 className="plant-name">{plant.name}</h2>
              <p className="plant-scientific-name">{plant.scientificName}</p>
              <p>{plant.description}</p>
              <div className="plant-bottom-row">
                <p>${plant.price}</p>
                <p>☀️ {plant.light}</p>
                <p>💦 {plant.watering}x/month</p>
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
