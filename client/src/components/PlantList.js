import React, { Component } from "react";
import axios from "axios";


export default class PlantList extends Component {
  // add state with a property called "plants" - initialize as an empty array
  constructor() {
    super()
    this.state = {
      searchVal: '',
      plants: [],
      response: [],
    };
  }


  // when the component mounts:this will be performed
  // fetch data from the server endpoint - http://localhost:3333/plants
  componentDidMount() {
    axios
      .get("http://localhost:3333/plants")
      .then((res) => {
        console.log(res)
        // returned plants array to this.state.plants
        this.setState({
          plants: res.data.plantsData,
          response: res.data.plantsData,
        });
      })
      .catch((error) => console.log(error))
  }

  // when the component updates: this will be performed
  // search using name
  // it will be like key:value  from values by e.target.name(creates key) and  e.target.value(creates vlaue) 
  componentDidUpdate(pastVal, pastState) {
    if (this.state.searchVal !== pastState.searchVal)
      this.setState({
        ...this.state,
        response: this.state.plants.filter(
          (plant) =>
            plant.name.toLowerCase().includes(this.state.searchVal)
        ),
      });
  }

  // getting value and seeting it to state from searchVal
  handleSearch = (e) => {
    this.setState({
      ...this.state, searchVal: e.target.value,
    });
  }
  /*********  DON'T CHANGE ANYTHING IN THE RENDER FUNCTION *********/
  render() {
    return (
      <main className="plant-list">
        <input
          type="text"
          name="searchVal"
          placeholder='Search by Name,scientific Name, Description'
          value={this.state.searchVal}
          onChange={this.handleSearch}
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
