import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css'

function Nav() {

  const navStyle = {
    color: 'white'
  }

  return (
    <nav>
      <Link to="/">
      <h3 style={navStyle}>Logo</h3>
      </Link>
      <ul className='nav-links'>
        <Link style={navStyle} to="/oliver">
        <li>Oliver</li>
        </Link>
        <Link style={navStyle} to="/Oscar">
        <li>Oscar</li>
        </Link>
      </ul>
    </nav>
  )
}

export default Nav