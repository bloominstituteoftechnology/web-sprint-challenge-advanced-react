import React, { Component } from "react";
import axios from "axios";
// import PlantData from "./PlantData";

export default class PlantList extends Component {
	// add state with a property called "plants" - initialize as an empty array
	constructor(props) {
		super(props);
		this.state = {
			plants: [],
		};
	}

	componentDidMount() {
		axios.get(`http://localhost:3333/plants`).then((res) => {
			console.log("1", res.data);
			this.setState({ plants: res.data });
		});
	}
	// when the component mounts:
	//   - fetch data from the server endpoint - http://localhost:3333/plants
	//   - set the returned plants array to this.state.plants

	/*********  DON'T CHANGE ANYTHING IN THE RENDER FUNCTION *********/
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
								<p>
									<span alt="" aria-label="">
										$
									</span>
									{plant.price}
								</p>
								<p>
									<span alt="" aria-label="">
										*
									</span>
									{plant.light}
								</p>
								<p>
									<span role="img" alt="" aria-label="">
										💦
									</span>
									{plant.watering}x/month
								</p>
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
