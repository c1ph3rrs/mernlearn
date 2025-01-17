import React from 'react'
import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <div>
        <ui>
            <li>
                <Link to='/'>Dashboard</Link>
            </li>      
            <li>
                <Link to='/about'>About</Link>
              </li>      
              <li>
                <Link to='/user'>User</Link>
            </li>      
        </ui>
    </div>
  )
}

export default Navbar
