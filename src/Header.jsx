import React from 'react'
import { Link } from 'react-router-dom'
import './App.css'


function Header() {
  return (
    <div className='headerBorder' >
        <nav>
            <h1>Header</h1>
            <ul className='links' >
                <li><Link to='/'>Signup</Link></li>
                <li><Link to='/profile'>Profile</Link></li>
            </ul>
        </nav>
    </div>
  )
}

export default Header