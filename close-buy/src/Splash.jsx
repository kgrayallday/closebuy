import React from 'react';
import './Splash.css';
import logo from './img/closebuy-logo-blue.png';

function Splash() {

  return (
    <div className='splash-parent'>
      <div className='splash-child'>
        <header><b>Close</b>Buy</header>
        <img className='splash-logo' src={logo} alt='' ></img>
      </div>      
    </div>
  );
}

export default Splash;