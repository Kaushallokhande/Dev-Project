import React from 'react'
import './Navbar.css'
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        {/* <button className="button-icon">
          MyCozyCampus
          <div className="small">
            By fastn
          </div>
        </button> */}
        <div className="menu-toggle">
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
        <ul className="menu">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li>
              <Link to="/signup">Sign Up</Link>
            </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
