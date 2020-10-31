import React, { useState, Component } from "react";
import axios from "axios";

export default class PlantList extends Component {
    constructor() {
      super();
      this.state = {
        plants: ""
      }
    }

    getPlants = (plants) => {
      axios.fetch('http://localhost:3333/plants')
      .then((response) => {
        this.state.plants(response.data);
      })
      .catch((error) => {
        alert('Error detected');
      });
    };

    postPlants = (plants) => {
    axios.post('http://localhost:3333/plants', plants)
    .then((response) => {
      this.state.plants([response.data, ...plants]);
    })
    .catch((error) => {
      console.log(error);
    })
  }

  render() {
    return (
      <main className="plant-list">
        {this.state?.plants?.map((plant) => (
          <div data-testid="plant-card" key={plant.id}>
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
