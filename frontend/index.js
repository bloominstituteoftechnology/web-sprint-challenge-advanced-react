import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, NavLink, Routes, Route } from 'react-router-dom'
import AppClass from './components/AppClass'
import AppFunctional from './components/AppFunctional'
import './styles/reset.css'
import './styles/styles.css'

const container = document.getElementById('root')
const root = createRoot(container)

root.render(
  <BrowserRouter>
    <h1>Welcome to the GRID</h1>
    <nav>
      <NavLink to="/">Functional</NavLink>
      <NavLink to="/class-based">Class-Based</NavLink>
    </nav>
    <Routes>
      <Route path="/" element={<AppFunctional className="functional" />} />
      <Route path="class-based" element={<AppClass className="class-based" />} />
    </Routes>
  </BrowserRouter>
)
