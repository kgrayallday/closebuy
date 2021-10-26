import React from 'react';
import './Navbar.css';

function Navbar() {

  return(
    <nav>
      <div className="left">
        <i class="fas fa-couch" id='brand-mark'></i>
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