import React, { Component } from "react";

import axios from "axios";

export default class PlantList extends Component {
  // add state with a property called "plants" -
  //  initialize as an empty plantsay

  state = {
    plants: [],
  };

  componentDidMount() {
    console.log("componentDidMount running");
    axios
      .get("http://localhost:3333/plants")
      .then((res) => {
        console.log(res.data.plantsData);
        this.setState({ plants: res.data.plantsData });
      })
      .catch((err) => console.log(err));
  }

  handleChanges = (e) => {
    e.preventDefault();
    // console.log(e.target.name, e.target.value);
    this.setState({ ...this.state, user: e.target.value });
  };

  // getUser = (e) => {
  //   e.preventDefault();
  //   axios

  //     .get(`https://api.github.com/users/${this.state.user}`)

  //     .then((res) => {
  //       this.setState({ ...this.state, plants: res.data });
  //       // console.log(res);
  //     })
  //     .catch((err) => console.log(err));

  // console.log("dk->" + this.state);
  // };
  // when the component mounts:
  //   - fetch data from the server endpoint - http://localhost:3333/plants
  //   - set the returned plants plantsay to this.state.plants

  /*********  DON'T CHANGE ANYTHING IN THE RENDER FUNCTION *********/
  render() {
    return (
      <main className="plant-list">
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
