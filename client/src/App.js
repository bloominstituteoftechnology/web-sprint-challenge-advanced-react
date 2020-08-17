import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'

import PlantList from './components/PlantList'
import ShoppingCart from './components/ShoppingCart'
import CheckoutForm from './components/CheckoutForm'

import './App.css'
import FilterForm from './components/FilterForm'
import ToggleTheme from './components/UI/ToggleTheme'
import { useLocalStorage } from './hooks/useLocalSotrage'

function App() {
  // array of plants that have been added to the cart
  const [cart, setCart] = useState([])

  const [darkMode, setDarkMode] = useLocalStorage('dark')
  const [search, setSearch] = useState('')

  // add a plant to the cart
  const addToCart = (plant) => {
    setCart([...cart, plant])
  }

  // remove a plant from the cart
  const removeFromCart = (plant) => {
    setCart(cart.filter((p) => p.id !== plant.id))
  }

  useEffect(() => {
    console.log(darkMode)
  }, [darkMode])

  return (
    <div>
      <Router>
        <nav className='container'>
          <h1>
            React Plants{' '}
            <span role='img' aria-label='plant'>
              🌿
            </span>
          </h1>
          <div>
            <FilterForm setSearch={setSearch} />
          </div>
          <ul className='steps'>
            <li>
              <NavLink exact to='/'>
                Plants
              </NavLink>
            </li>
            <li>
              <NavLink to='/cart'>
                Cart
                <span className='cart-badge'>
                  {cart.length > 0 && cart.length}
                </span>
              </NavLink>
            </li>
          </ul>
          <ToggleTheme darkMode={darkMode} setDarkMode={setDarkMode} />
        </nav>
        <Route
          exact
          path='/'
          render={() => (
            <PlantList
              addToCart={addToCart}
              search={search}
              darkMode={darkMode}
            />
          )}
        />
        <Route
          path='/cart'
          render={(props) => (
            <ShoppingCart
              {...props}
              cart={cart}
              removeFromCart={removeFromCart}
            />
          )}
        />
        <Route path='/checkout' component={CheckoutForm} />
      </Router>
    </div>
  )
}

export default App
