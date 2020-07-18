import React, { Component } from "react";
import axios from "axios";

export default class PlantList extends Component {
  constructor() {
    super();
    this.state = {
      plants: [],
      searchValue: [],
      search: "",
      searched: "",
    };
  }

  handleSearchChange = (e) => {
    this.setState({ searched: e.target.value });
    console.log(this.state.searched);
  };

  componentDidMount() {
    axios
      .get("http://localhost:3333/plants")
      .then((res) =>
        this.setState({
          plants: res.data.plantsData,
          searchValue: res.data.plantsData,
        })
      )
      .catch((err) => console.log(err));
  }

  componentDidUpdate() {
    if (this.state.searched !== this.state.search) {
      const searched = this.state.plants.filter((plant) =>
        plant.name.toLowerCase().includes(this.state.searched.toLowerCase())
      );
      this.setState({ search: this.state.searched });
      return this.setState({ searchValue: searched });
    }
  }

  // add state with a property called "plants" - initialize as an empty array

  // when the component mounts:
  //   - fetch data from the server endpoint - http://localhost:3333/plants
  //   - set the returned plants array to this.state.plants

  /*********  DON'T CHANGE ANYTHING IN THE RENDER FUNCTION *********/
  render() {
    return (
      <>
        {/* {console.log("this is searched value", this.state.searchValue)} */}

        <input
          name="searched"
          style={{ width: "20%", margin: "1% auto 0 auto" }}
          value={this.state.searched}
          onChange={this.handleSearchChange}
          placeholder="seach for plant"
        ></input>


        {this.state.searchValue ? (
          <main className="plant-list">
            {this.state.searchValue.map((plant) => (
              <div className="plant-card" key={plant.id}>
                <img className="plant-image" src={plant.img} alt={plant.name} />
                <div className="plant-details">
                  <h2 className="plant-name">{plant.name}</h2>
                  <p className="plant-scientific-name">
                    {plant.scientificName}
                  </p>
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
        ) : (
          <div>please wait</div>
        )}
      </>
    );
  }
}
