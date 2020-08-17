import React, { Component } from 'react'
import axios from 'axios'

export default class PlantList extends Component {
  // add state with a property called "plants" - initialize as an empty array

  // when the component mounts:
  //   - fetch data from the server endpoint - http://localhost:3333/plants
  //   - set the returned plants array to this.state.plants

  constructor(props) {
    super(props)
    this.state = {
      plants: [],
      darkMode: this.props.darkMode,
    }
  }

  getPlants = () => {
    axios
      .get('http://localhost:3333/plants')
      .then((res) => {
        console.log(res.data.plantsData)
        this.setState({ plants: res.data.plantsData })
      })
      .catch((err) => console.log(err))
  }

  componentDidMount() {
    this.getPlants()
  }

  /*********  DON'T CHANGE ANYTHING IN THE RENDER FUNCTION *********/
  render() {
    const filteredPlant = this.state.plants.filter((plant) =>
      plant.name.toLowerCase().includes(this.props.search.toLowerCase())
    )
    return (
      <div className={this.props.darkMode ? 'dark-mode' : 'light-mode'}>
        <main className='plant-list'>
          {filteredPlant?.map((plant) => (
            <div className='plant-card' key={plant.id}>
              <img className='plant-image' src={plant.img} alt={plant.name} />
              <div
                // className='plant-details'
                className={
                  this.props.darkMode ? 'plant-details-dark' : 'plant-details'
                }
              >
                <h2 className='plant-name'>{plant.name}</h2>
                <p className='plant-scientific-name'>{plant.scientificName}</p>
                <p>{plant.description}</p>
                <div className='plant-bottom-row'>
                  <p>${plant.price}</p>
                  <p>
                    <span role='img' aria-label='sun'>
                      ☀️
                    </span>
                    {plant.light}
                  </p>
                  <p>
                    {plant.light}
                    <span role='img' aria-label='water'>
                      💦
                    </span>
                    {plant.watering} x/month
                  </p>
                </div>
                <button
                  className='plant-button'
                  onClick={() => this.props.addToCart(plant)}
                >
                  Add to cart
                </button>
              </div>
            </div>
          ))}
        </main>
      </div>
    )
  }
}
