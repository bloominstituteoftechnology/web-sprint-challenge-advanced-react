import React from 'react';
import { useDarkMode } from '../hooks/useDarkMode';

const Nav = () => {

    const [darkMode, setDarkMode] = useDarkMode('Dark Mode', false)

    const toggle = (e) => {
        e.preventDefault();
        setDarkMode(!darkMode)
    }

    return(
        <div className='navbar' >
    
            <h1 className='nav-title' >
                Click me to switch 
            </h1>
            <button onClick={toggle} >toggle</button>
        </div>
    )
}

export default Nav;