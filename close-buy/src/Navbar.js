import React from 'react';
import './Navbar.css';
import logo from './img/closebuy-logo-white.png';

function Navbar() {

  return(
    <nav>
      <div className="left">
        <img src={logo} alt='' height='50vw'/>
      </div>

      <div className="center">
        <b>Close</b>Buy
      </div>

      <div className="right">
        About
      </div>
    </nav>
  )

}

export default Navbar;