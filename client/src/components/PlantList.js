import React, { Component } from "react";
import axios from "axios";

export default class PlantList extends Component {
  state = {
    plants: [],
    search: "",
  };
  // add state with a property called "plants" - initialize as an empty array

  // when the component mounts:
  //   - fetch data from the server endpoint - http://localhost:3333/plants
  //   - set the returned plants array to this.state.plants
  handleChange = (e) => {
    this.setState({ search: e.target.value });
    
  };

  componentDidUpdate() {}

  componentDidMount() {
    axios.get("http://localhost:3333/plants").then((res) => {
      console.log(res.data.plantsData);
      const plants = res.data.plantsData;
      this.setState({ plants: plants });
    });
  }

  /*********  DON'T CHANGE ANYTHING IN THE RENDER FUNCTION *********/
  render() {
    return (
      <main className="plant-list">
        <input
          id="search"
          name="search"
          value={this.state.search}
          onChange={this.handleChange}
        />
        {this.state?.plants?.map((plant) => (
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
