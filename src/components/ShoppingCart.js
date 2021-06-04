import React from "react";

/*
Shopping Cart
Nothing needs to be done here.You will have to navigate to the cart page in your app so you can go to the checkout form
for the next step.
*/

/********* DO NOT DO ANYTHING IN THIS COMPONENT *********/

export default function ShoppingCart(props) {
  const total = props.cart.reduce((sum, d) => sum + d.price, 0);
  return (
    <div className="cart">
      {props.cart.map((plant) => (
        <div className="plant-card" key={plant.id}>
          <img className="plant-image" src={plant.img} alt={plant.name} />
          <div className="plant-details">
            <h2 className="plant-name">{plant.name}</h2>
            <p>${plant.price}</p>
            <button
              className="plant-button"
              onClick={() => props.removeFromCart(plant)}
            >
              Remove
            </button>
          </div>
        </div>
      ))}
      <div className="checkout-section">
        <p className="total">Total: ${total}</p>
        <button
          className="checkout"
          onClick={() => props.history.push("/checkout")}
        >
          Checkout
        </button>
      </div>
    </div>
  );
}
