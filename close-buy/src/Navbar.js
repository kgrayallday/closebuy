import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from './img/closebuy-logo-white.png';

function Navbar() {

  return(
    <nav>
      <div className="left">
        <Link to="/" style={{ color: 'inherit', textDecoration: 'inherit'}}>
        <img src={logo} alt='' height='50vw'/>
        </Link>
      </div>
        
        <div className="center">
        <Link to="/" style={{ color: 'inherit', textDecoration: 'inherit'}}>
          <b>Close</b>Buy
        </Link>
        </div>

      <div className="right">
        <Link to="/about" style={{ color: 'inherit', textDecoration: 'inherit'}}>
          About
        </Link>
      </div>
    </nav>
  )
}

export default Navbar;