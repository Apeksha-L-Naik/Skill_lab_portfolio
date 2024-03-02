import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    <nav className='navbar-wrapper'>
        <div className='nav-content'>
    <div className='logo'>
        <h3>Naikzzzzzz</h3>
    </div>
    <ul>
        <li className='menuItem'>
            <NavLink to="/">Home</NavLink>
        </li>
        <li className='menuItem'>
            <NavLink to="/about">About</NavLink>
        </li>
        <li className='menuItem'>
            <NavLink to="/project">Projects</NavLink>
        </li>
        <li className='menuItem'>
            <NavLink to="/skill">Skills</NavLink>
        </li>
        <li className='menuItem'>
            <NavLink to="/contact">Contact</NavLink>
        </li>
    <button className='btn' onClick={()=>{}}>Hire me</button>
    </ul>
    </div>
    </nav>
    </>
  )
}

export default Navbar